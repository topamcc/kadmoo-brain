import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { readSourceCatalog } from "./tool-catalog.mjs";

const appRoot = process.argv[2] || process.env.KADMOO_APP_ROOT;
if (!appRoot) throw new Error("Pass the application checkout matching the release, or set KADMOO_APP_ROOT");
const catalog = await readSourceCatalog(appRoot);
await writeFile(
  join(import.meta.dirname, "known-tools.json"),
  `${JSON.stringify(catalog, null, 2)}\n`
);
console.log(`Wrote ${catalog.tools.length} source-derived tool definitions`);
