const {
  generateFreqCounterObj,
  main,
} = require("./frequency-counter-anagram-problem.js");

const functionName = process.argv[2];
const args = process.argv.filter((ele, index) => index > 2);
console.log("args: ", args);
const functionMap = { generateFreqCounterObj, main };

try {
  if (functionMap[functionName]) {
    functionMap[functionName](...args);
  } else {
    console.log(`there is not function with name =  ${functionName}`);
  }
} catch (error) {
  console.error("SOME ERROR OCCURRED: ", JSON.stringify(error));
}
