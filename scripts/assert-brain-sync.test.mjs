import test from "node:test";
import assert from "node:assert/strict";
import { assertBrainSync } from "./assert-brain-sync.mjs";

test("fully successful sync passes, including a verified unchanged vault", () => {
  assert.doesNotThrow(() => assertBrainSync({ ok: true, synced: 3, errors: [] }));
  assert.doesNotThrow(() => assertBrainSync({ ok: true, synced: 0, errors: [] }));
});

test("partial success and malformed responses cannot report a green sync", () => {
  for (const result of [null, {}, { ok: false, errors: [] }, { ok: true }, { ok: true, errors: [{ path: "skill", error: "write failed" }] }]) {
    assert.throws(() => assertBrainSync(result), /did not complete/);
  }
});
