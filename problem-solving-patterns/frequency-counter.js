// source: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816152#overview

const generateFreqObj = (arr) => {
  freqObj = {};
  for (const element of arr) {
    freqObj[element] = (freqObj[element] || 0) + 1;
  }
  return freqObj;
};

const main = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const freq1 = generateFreqObj(arr1);
  console.log("🚀 ~ file: frequency-counter.js:16 ~ main ~ freq1:", freq1);
  const freq2 = generateFreqObj(arr2);
  console.log("🚀 ~ file: frequency-counter.js:18 ~ main ~ freq2:", freq2);

  for (key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key ** 2]) {
      return false;
    }
  }
  return true;
};

arrA1 = [1, 2, 2, 4, 5];
arrA2 = [4, 4, 16, 1, 9];
if (main(arrA1, arrA2)) {
  console.log("YuP");
} else {
  console.log("Nope");
}
