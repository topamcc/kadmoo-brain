import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function assertBrainSync(result) {
  if (!result || result.ok !== true || !Array.isArray(result.errors) || result.errors.length) {
    throw new Error("Brain sync did not complete successfully; inspect the reported document errors before rollout.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  assertBrainSync(JSON.parse(readFileSync(process.argv[2], "utf8")));
  console.log("Brain sync completed without document errors");
}
