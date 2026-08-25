import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const appRoot = join(import.meta.dirname, "..", "..", "Kadmoo App 2026");
const sources = [
  join(appRoot, "lib", "services", "ai-assistant", "tool-registry.ts"),
  join(appRoot, "lib", "services", "onboarding", "sales-agent.ts"),
];
const names = new Set();
for (const file of sources) {
  const text = await readFile(file, "utf8");
  for (const m of text.matchAll(/^\s+name: "([a-z0-9_]+)"/gm)) {
    names.add(m[1]);
  }
}
const sorted = [...names].sort();
await writeFile(
  join(import.meta.dirname, "known-tools.json"),
  `${JSON.stringify(sorted, null, 2)}\n`
);
console.log(`Wrote ${sorted.length} tools`);
