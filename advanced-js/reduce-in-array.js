console.log(" ========= learning reduce method for arrays ============")

const employees = [
  { name: "Priya", age: 20 },
  { name: "Renuka", age: 25 },
  { name: "Jibesh", age: 28 },
  { name: "Zubin", age: 33 },
  { name: "Narayan", age: 25 },
]

const ageGrouped = employees.reduce((accumulator, current) => {
  const currentAgeGroup = current.age
  if (!accumulator[currentAgeGroup]) {
    accumulator[currentAgeGroup] = []
  }
  accumulator[currentAgeGroup].push(current)
  return accumulator
}, {})

console.log("age grouped array = ", ageGrouped)
/* OUTPUT: {
  "20": [
    {
      "name": "Priya",
      "age": 20
    }
  ],
  "25": [
    {
      "name": "Renuka",
      "age": 25
    },
    {
      "name": "Narayan",
      "age": 25
    }
  ],
  "28": [
    {
      "name": "Jibesh",
      "age": 28
    }
  ],
  "33": [
    {
      "name": "Zubin",
      "age": 33
    }
  ]
}
*/