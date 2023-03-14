console.log("======= Generator functions ======")

const studentsArr = ["Rumi", "Rintu", "Akshay"]

// Generator function declaration
function* studentGenerator() {
  for (let i = 0; i < studentsArr.length; i++) {
    yield studentsArr[i]
  }
}

const iterator = studentGenerator()
console.log("Student gen iteration 1", iterator.next())
// OUTPUT: { value: "Rumi", done: false }
console.log("Student gen iteration 2", iterator.next())
// OUTPUT: { value: "Rintu", done: false }
console.log("Student gen iteration 3", iterator.next())
// OUTPUT: { value: "Akshay", done: false }
console.log("Student gen iteration 4", iterator.next())
// OUTPUT: { value: undefined, done: false }
