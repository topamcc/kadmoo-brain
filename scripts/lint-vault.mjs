#!/usr/bin/env node
/**
 * Vault lint (warn-only): frontmatter, unique slugs, operational graph connectivity.
 * Exit 0 always unless --strict is passed.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SYNCABLE = ["01-Agency", "10-Skills", "20-Playbook", "30-Knowledge", "40-Clients"];
const VALID_TYPES = new Set(["agency-config", "skill", "playbook", "knowledge", "client-note"]);
const VALID_STATUS = new Set(["draft", "approved"]);

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
      if (e.name.startsWith(".") || e.name === "_templates" || e.name === "90-Archive") continue;
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
  for (const line of yaml.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
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

const strict = process.argv.includes("--strict");
const files = await walk(ROOT);
const notes = [];
const warnings = [];

for (const file of files) {
  const rel = relative(ROOT, file).replaceAll("\\", "/");
  const raw = await readFile(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const stem = rel.split("/").pop().replace(/\.md$/i, "");
  notes.push({ rel, stem, data, body, links: wikilinks(raw) });
}

const syncable = notes.filter((n) => SYNCABLE.some((p) => n.rel.startsWith(`${p}/`)));
const slugs = new Map();
for (const n of syncable) {
  const type = n.data.kadmoo_type;
  const status = n.data.status || "draft";
  if (!type) warnings.push(`${n.rel}: missing kadmoo_type`);
  else if (!VALID_TYPES.has(type)) warnings.push(`${n.rel}: unknown kadmoo_type ${type}`);
  if (!VALID_STATUS.has(status)) warnings.push(`${n.rel}: unknown status ${status}`);
  const slug = (n.data.slug || stemSafe(n)).toLowerCase();
  if (status === "approved" && slug) {
    if (slugs.has(slug)) warnings.push(`${n.rel}: duplicate slug ${slug} (also ${slugs.get(slug)})`);
    else slugs.set(slug, n.rel);
  }
}

const stems = new Set(notes.map((n) => n.stem.toLowerCase()));
const incoming = new Map();
for (const n of notes) {
  for (const t of n.links) {
    const key = t.toLowerCase();
    incoming.set(key, (incoming.get(key) ?? 0) + 1);
  }
}

for (const n of syncable) {
  if ((n.data.status || "draft") !== "approved") continue;
  const inCount = incoming.get(n.stem.toLowerCase()) ?? 0;
  const outCount = n.links.length;
  if (inCount === 0 && outCount === 0 && n.data.kadmoo_type !== "agency-config") {
    warnings.push(`${n.rel}: approved note is isolated from the operational graph`);
  }
}

function stemSafe(n) {
  return n.stem;
}

console.log(`Linted ${notes.length} notes (${syncable.length} syncable)`);
if (warnings.length === 0) {
  console.log("No warnings");
} else {
  console.log(`${warnings.length} warning(s):`);
  for (const w of warnings) console.log(` - ${w}`);
}

if (strict && warnings.length > 0) process.exit(1);
process.exit(0);
