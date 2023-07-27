// source: https://www.patterns.dev/posts/proxy-pattern

const person = {
  name: "hari",
  age: 10,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`${prop} of the person is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`setting ${prop} as ${value} to person`);
    obj[prop] = value;
  },
});

personProxy.name;
personProxy.age = 12;

console.log("person : ", person.age);

/* NOTES
A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.
*/
