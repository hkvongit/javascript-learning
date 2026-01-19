/* 
Source:
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154#overview

Problem statement:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

example:
validAnagram ('aaz', 'zza') // false
validAnagram( anagram','nagaram')  //true
*/

const generateFreqCounterObj = (word) => {
  console.log(word);
  const freqCounterObj = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // console.log(
    //   "🚀 ~ file: frequency-counter-anagram-problem.js:17 ~ generateFreqCounterObj ~ letter:",
    //   letter
    // );
    if (freqCounterObj[letter]) {
      freqCounterObj[letter] = freqCounterObj[letter] + 1;
    } else {
      freqCounterObj[letter] = 1;
    }
  }
  console.log(freqCounterObj);
  return freqCounterObj;
};

const main = (word1, word2) => {
  const notAnagramMsg = `${word1} & ${word2} are not anagram`;
  if (word1.length !== word2.length) {
    console.log(`1. ${notAnagramMsg}`);
    return false;
  }
  // make an object with the key as the letter and value as total count of that key(letter) in the word.
  const freqCounterObj1 = generateFreqCounterObj(word1);
  const freqCounterObj2 = generateFreqCounterObj(word2);
  //  Do this for both the words

  // loop each the keys in the object 1 and find it is the second object and ensure the value matches.
  for (let key in freqCounterObj1) {
    console.log("key in freqCounterObj1 :", key);
    if (freqCounterObj1[key] !== freqCounterObj2[key]) {
      console.log(`2. ${notAnagramMsg}`);
      return false;
    }
  }
  console.log(`${word1} & ${word2} are ANAGRAMS`);
  return true;
};

/*
const test = () => {
  const objee = { a: 2, b: 2 };
  for (const key in obj) {
  }
};
*/

module.exports = {
  generateFreqCounterObj,
  main,
};
