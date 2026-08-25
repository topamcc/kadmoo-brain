#!/usr/bin/env node
/**
 * Vault lint — Agent Skills-style validation for Kadmoo Brain.
 * Errors exit 1 (block sync). Warnings print only, unless --strict.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SYNCABLE = [
  "01-Agency",
  "02-Departments",
  "10-Skills",
  "20-Playbook",
  "30-Knowledge",
  "40-Clients",
];
const VALID_TYPES = new Set([
  "agency-config",
  "skill",
  "playbook",
  "knowledge",
  "client-note",
]);
const VALID_STATUS = new Set(["draft", "approved"]);
const KEBAB_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ASCII_FILE = /^[A-Za-z0-9._-]+\.md$/;
const AUTO_SLUG = /^(insight|verified|learning)-/;
const SOURCE_STATUS_LEFTOVER = "סטטוס מקור ב-DB";
const SKILL_NAME_MAX = 64;
const SKILL_DESC_MAX = 1024;
const SKILL_BODY_MAX_LINES = 500;

async function walk(dir, acc = []) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith(".") || e.name === "_templates" || e.name === "90-Archive")
        continue;
      await walk(p, acc);
    } else if (e.name.endsWith(".md")) {
      acc.push(p);
    }
  }
  return acc;
}

function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, "");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end < 0) return { data: {}, body: text };
  const yaml = text.slice(3, end);
  const body = text.slice(end + 4);
  const data = {};
  let listKey = null;
  for (const line of yaml.split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      data[listKey].push(item[1].replace(/^["']|["']$/g, "").trim());
      continue;
    }
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const val = m[2].trim();
    if (val === "" || val === "[]") {
      listKey = key;
      data[key] = [];
    } else {
      listKey = null;
      data[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body };
}

function wikilinks(text) {
  const out = [];
  const re = /\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g;
  let m;
  while ((m = re.exec(text))) out.push(m[1].trim());
  return out;
}

function asList(value) {
  if (Array.isArray(value)) return value.filter((x) => typeof x === "string" && x);
  if (typeof value === "string" && value) return [value];
  return [];
}

let knownTools = null;
try {
  const raw = await readFile(join(import.meta.dirname, "known-tools.json"), "utf8");
  knownTools = new Set(JSON.parse(raw));
} catch {
  knownTools = null;
}

const strict = process.argv.includes("--strict");
const files = await walk(ROOT);
const notes = [];
const errors = [];
const warnings = [];

for (const file of files) {
  const rel = relative(ROOT, file).replaceAll("\\", "/");
  const raw = await readFile(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const stem = rel.split("/").pop().replace(/\.md$/i, "");
  notes.push({
    rel,
    stem,
    fileName: rel.split("/").pop(),
    data,
    body,
    links: wikilinks(raw),
    aliases: asList(data.aliases),
  });
}

const syncable = notes.filter((n) => SYNCABLE.some((p) => n.rel.startsWith(`${p}/`)));
const slugs = new Map();
const targets = new Set();
for (const n of notes) {
  targets.add(n.stem.toLowerCase());
  const slug = typeof n.data.slug === "string" ? n.data.slug.toLowerCase() : "";
  if (slug) targets.add(slug);
  for (const a of n.aliases) targets.add(a.toLowerCase());
}

for (const n of syncable) {
  const type = n.data.kadmoo_type;
  const status = n.data.status || "draft";
  const approved = status === "approved";
  const slug = (typeof n.data.slug === "string" && n.data.slug ? n.data.slug : n.stem).toLowerCase();

  if (!ASCII_FILE.test(n.fileName)) {
    errors.push(`${n.rel}: syncable filename must be ASCII kebab-case`);
  }

  if (!type) errors.push(`${n.rel}: missing kadmoo_type`);
  else if (!VALID_TYPES.has(type)) errors.push(`${n.rel}: unknown kadmoo_type ${type}`);
  if (!VALID_STATUS.has(status)) errors.push(`${n.rel}: unknown status ${status}`);

  if (approved && slug && !KEBAB_SLUG.test(slug)) {
    errors.push(`${n.rel}: slug "${slug}" must be lowercase kebab-case`);
  }
  if (approved && n.rel.startsWith("20-Playbook/") && AUTO_SLUG.test(slug)) {
    errors.push(`${n.rel}: auto-export slug ${slug} cannot be approved in Playbook`);
  }
  if (approved && n.rel.startsWith("20-Playbook/") && n.body.includes(SOURCE_STATUS_LEFTOVER)) {
    errors.push(`${n.rel}: leftover export footer in approved playbook`);
  }

  if (approved && slug) {
    if (slugs.has(slug)) errors.push(`${n.rel}: duplicate slug ${slug} (also ${slugs.get(slug)})`);
    else slugs.set(slug, n.rel);
  }

  if (type === "skill") {
    if (approved && !n.data.when_to_use) {
      errors.push(`${n.rel}: skill requires when_to_use`);
    }
    const name = typeof n.data.name === "string" ? n.data.name : "";
    const desc = typeof n.data.description === "string" ? n.data.description : "";
    if (name.length > SKILL_NAME_MAX) {
      warnings.push(`${n.rel}: name exceeds ${SKILL_NAME_MAX} characters`);
    }
    if (desc.length > SKILL_DESC_MAX) {
      warnings.push(`${n.rel}: description exceeds ${SKILL_DESC_MAX} characters`);
    }
    const bodyLines = n.body.split(/\r?\n/).length;
    if (bodyLines > SKILL_BODY_MAX_LINES) {
      warnings.push(`${n.rel}: skill body is ${bodyLines} lines (budget ${SKILL_BODY_MAX_LINES})`);
    }
    const hints = asList(n.data.tool_hints);
    if (knownTools) {
      for (const hint of hints) {
        if (!knownTools.has(hint)) {
          warnings.push(`${n.rel}: unknown tool_hint "${hint}"`);
        }
      }
    }
  }

  if (approved) {
    for (const link of n.links) {
      if (!targets.has(link.toLowerCase())) {
        errors.push(`${n.rel}: broken wikilink [[${link}]]`);
      }
    }
  }
}

const incoming = new Map();
for (const n of notes) {
  for (const t of n.links) {
    const key = t.toLowerCase();
    incoming.set(key, (incoming.get(key) ?? 0) + 1);
  }
}

for (const n of syncable) {
  if ((n.data.status || "draft") !== "approved") continue;
  const keys = [n.stem.toLowerCase(), String(n.data.slug || "").toLowerCase(), ...n.aliases.map((a) => a.toLowerCase())];
  const inCount = keys.reduce((sum, k) => sum + (k ? incoming.get(k) ?? 0 : 0), 0);
  const outCount = n.links.length;
  if (inCount === 0 && outCount === 0 && n.data.kadmoo_type !== "agency-config") {
    warnings.push(`${n.rel}: approved note is isolated from the operational graph`);
  }
}

console.log(`Linted ${notes.length} notes (${syncable.length} syncable)`);
if (errors.length === 0 && warnings.length === 0) {
  console.log("No issues");
} else {
  if (errors.length) {
    console.log(`${errors.length} error(s):`);
    for (const e of errors) console.log(` - ${e}`);
  }
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`);
    for (const w of warnings) console.log(` - ${w}`);
  }
}

if (errors.length > 0) process.exit(1);
if (strict && warnings.length > 0) process.exit(1);
process.exit(0);
