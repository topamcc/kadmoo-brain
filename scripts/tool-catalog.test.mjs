import test from "node:test";
import assert from "node:assert/strict";
import { extractToolNames, readSourceCatalog } from "./tool-catalog.mjs";

test("extracts inline and multiline declarations but excludes unrelated names", () => {
  assert.deepEqual(extractToolNames(`
    { name: "read_campaign", description: "Read", parameters: {} },
    { name: "update_campaign",
      description: "Update", parameters: {} },
    { name: "customer", value: "private" }
  `), ["read_campaign", "update_campaign"]);
});

test("missing application checkout fails rather than trusting manual names", async () => {
  await assert.rejects(readSourceCatalog("/missing-kadmoo-app-source"));
});
