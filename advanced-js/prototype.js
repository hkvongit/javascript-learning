// PROTOTYPES are used to add a property to a constructor function 

function Person(name, favSport) {
  this.name = name;
  this.favoriteSport = favSport;
}

const person1 = new Person("Rintu", "Formula One")

console.log(person1)
// OUTPUT: { name: "Rintu", favoriteSport: "Formula One" }

Person.prototype.getFavSport = function () { return `favorite sport is ${this.favoriteSport}` }

console.log(`What is person1's fav sport ? `, person1.getFavSport())
// Output: What is person1's fav sport ?  favorite sport is Formula One