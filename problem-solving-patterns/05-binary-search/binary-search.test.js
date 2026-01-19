const assert = require("assert");
const { main } = require("./binary-search");

try {
  assert.strictEqual(main([1, 2, 3, 4, 5, 6, 7], 6), 5);
  assert.strictEqual(main([1, 4, 9], 8), -1);
  assert.strictEqual(main([1, 3, 5, 7, 9, 11, 13], 7), 3);
  assert.strictEqual(main([1, 3, 5, 7, 9, 11, 13], 1), 0);
  assert.strictEqual(main([], 5), -1);
  assert.strictEqual(main([5], 5), 0);
  assert.strictEqual(main([5], 3), -1);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
