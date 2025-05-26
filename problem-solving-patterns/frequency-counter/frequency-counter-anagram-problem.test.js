const assert = require("assert");
const { main } = require("./frequency-counter-anagram-problem.js");

try {
  assert.strictEqual(main("anagram", "anagmra"), true);
  assert.strictEqual(main("anagram", "anagmry"), false);
  assert.strictEqual(main("anagraam", "anagmrab"), false);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
