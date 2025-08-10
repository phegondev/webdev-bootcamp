// LECTURE 22: OBJECT

//creating an object

let person = {
    name: "Den",
    age: 35,
    isStudent: false
};

//accessing properties of an object
const myName = person.name;
const myAge = person.age;

console.log(myName)
console.log(myAge)


//iterates over the objects
for (let key in person) {
    console.log(key)
}


let personKeys = Object.keys(person);
console.log(personKeys)

let personValues = Object.values(person);
console.log(personValues)


let personKeysValues = Object.entries(person);
console.log(personKeysValues);

//add a new property
person.job = "Developer";

console.log(Object.entries(person))

//modify existsing data
person.age = 38;

//remove/delete a property
delete person.isStudent;

console.log(Object.entries(person))



