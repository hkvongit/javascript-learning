const assert = require("assert");
const { main } = require("./merge-sort");

try {
  assert.deepStrictEqual(main([3, 4, 7, 6]), [3, 4, 6, 7]);
  assert.deepStrictEqual(main([3, 4, 7, 2]), [2, 3, 4, 7]);
  assert.deepStrictEqual(main([97, 4, 7, 2]), [2, 4, 7, 97]);
  assert.deepStrictEqual(main([3, 22, 4, 7, 6, 76]), [3, 4, 6, 7, 22, 76]);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
