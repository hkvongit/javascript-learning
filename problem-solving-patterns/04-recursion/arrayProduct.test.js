const assert = require("assert");
const { productOfArray } = require("./arrayProduct");

try {
  assert.strictEqual(productOfArray([1, 2, 3]), 6);
  assert.strictEqual(productOfArray([1, 2, 3, 10]), 60);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
