const assert = require("assert");
const { main } = require("./native-string-search.js");

try {
  assert.strictEqual(main("Harold says haha in hamburg", "ha"), 4);
  assert.strictEqual(
    main("Lando Norris is the new Fomula 1 champion", "is"),
    2
  );
  assert.strictEqual(main("You are not a good person", "not"), 1);
  console.log("✅ All tests passed.");
} catch (err) {
  console.error("🔴 TEST FAILED. \nERROR:: ", JSON.stringify(err));
}
