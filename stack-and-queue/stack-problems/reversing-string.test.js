const assert = require("assert");
const { main } = require("./reversing-string.js");

try {
  console.log("Running Reverse string tests...");

  // Test Case 1: Simple addition (2 + 1)
  assert.strictEqual(main("self pride"), "edirp fles");

  // Test Case 2: Complex expression (2 + 1) * 3
//   assert.strictEqual(main(["2", "1", "+", "3", "*"]), 9);

  // Test Case 3: Subtraction (4 - 3)
//   assert.strictEqual(main(["4", "3", "-"]), 1);

  // Test Case 4: Division (10 / 5)
//   assert.strictEqual(main(["10", "5", "/"]), 2);

  console.log("✅ All tests passed.");
  
} catch (err) {
  console.error("🔴 TEST FAILED.");
  console.error("Error Details:", err.message);
  // Optional: print stack trace for more info
  // console.error(err.stack);
}