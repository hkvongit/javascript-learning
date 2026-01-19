const assert = require("assert");
const { countUniqueValues } = require("./countUniqueValues");

try {
  assert.strictEqual(countUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.strictEqual(
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
    7
  );
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
