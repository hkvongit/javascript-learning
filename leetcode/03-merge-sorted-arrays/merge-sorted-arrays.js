function main(array1, array2) {
  let output = [];
  let [i, j] = [0, 0];

  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      output.push(array1[i]);
      i++;
    }
    output.push(array2[j]);
    j++;
  }

  while (i < array1.length) {
    output.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    output.push(array2[j]);
    j++;
  }

  return output;
}

console.log(main([], [0]));
