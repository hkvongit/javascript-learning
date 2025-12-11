// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  const arrayLen = arr.length;
  if (arrayLen === 0) {
    return 0;
  }
  if (arrayLen === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

module.exports = {
  productOfArray,
};
