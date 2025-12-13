function sum() {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// console.log(sum(5, 4, 9));

const arrowFn = (arg1, arg2, ...args) => {
  let total = 0;
  for (i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(arrowFn(5, 4, 20, 10));
// OUTPUT: 30
