// Get product names - From [{name: 'Laptop', price: 1000}, {name: 'Phone', price: 500}], extract just the names.
const arr = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

const names = arr.map((item) => {
  return item.name;
});

console.log(names);
