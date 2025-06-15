const assert = require("assert");
const { sumZero } = require("./add-to-zero-pairs");

try {
  assert.deepEqual(sumZero([-3, -2, 0, 2, 6]), [-2, 2]);
  assert.deepEqual(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]), [-3, 3]);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
