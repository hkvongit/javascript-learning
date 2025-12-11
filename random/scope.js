var scope = 1;

function learningScope() {
  var scope = 2;
  console.log("Scope inside learningScope: ", scope);
}

console.log("1. Global scope: ", scope);

learningScope();
console.log("2. Global scope: ", scope);

var scope = 3;
console.log(". Global scope: ", scope);
