import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

export const sources = [
  "lib/services/ai-assistant/tool-registry.ts",
  "lib/services/onboarding/sales-agent.ts",
  "lib/services/content-studio/agent-contract.ts",
  "lib/services/social/agent-post-contract.ts",
];

export function extractToolNames(source) {
  return [...source.matchAll(/\bname:\s*"([a-z0-9_]+)"\s*,\s*(?:\/\/[^\n]*\n\s*)?description:/g)].map((match) => match[1]);
}

export async function readSourceCatalog(appRoot) {
  const names = new Set();
  const hashes = {};
  for (const file of sources) {
    const source = await readFile(join(appRoot, file), "utf8");
    hashes[file] = createHash("sha256").update(source.replaceAll("\r\n", "\n")).digest("hex");
    const extracted = extractToolNames(source);
    if (!extracted.length) throw new Error(`No tool definitions found in ${file}`);
    for (const name of extracted) names.add(name);
  }
  return { version: 1, sourceHashes: hashes, tools: [...names].sort() };
}
