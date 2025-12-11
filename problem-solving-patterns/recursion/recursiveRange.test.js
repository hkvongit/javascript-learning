const assert = require("assert");
const { recursiveRange } = require("./recursiveRange");

try {
  assert.strictEqual(recursiveRange(6), 21);
  assert.strictEqual(recursiveRange(10), 55);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
