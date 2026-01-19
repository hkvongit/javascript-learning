const assert = require("assert");
const { maxSumSol1 } = require("./maxSum");

try {
  assert.strictEqual(maxSumSol1([1, 2, 5, 2, 8, 1, 5], 2), 10);
  assert.strictEqual(maxSumSol1([1, 2, 5, 2, 8, 1, 5], 4), 17);
  assert.strictEqual(maxSumSol1([], 2), null);
  assert.strictEqual(maxSumSol1([4, 2, 1, 6], 1), 6);
  assert.strictEqual(maxSumSol1([4, 2, 1, 6, 2], 4), 13);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
