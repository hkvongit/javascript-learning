// Source: https://www.w3schools.com/Js/js_function_bind.asp
// JavaScript Function bind()

const person = {
  firstName: "Hari",
  lastName: "Krishnana",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const raviObj = {
  firstName: "Ravi",
  lastName: "Sankar",
};

let fullNameWithBind = person.fullName.bind(raviObj);

console.log(fullNameWithBind());
//OUTPUT:  Ravi Sankar
