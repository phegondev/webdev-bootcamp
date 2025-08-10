// LECTURE 27: ARGUMENTS & PARAMETERS


//parameters is the placeholder for accepting or storing the data(arguments) that will be passed in
const greet = (name) => {
    return `Hello ${name}`
}

const sayHello = greet("Alice");// arguments is the data being passed into it

console.log(sayHello);


const describeSomeone = (name, age, sex, occupation) => {
    return `Your name is ${name} you are ${age} years old you are a ${sex} your occupation is ${occupation}`
}

//default parameters

const describeSomeoneWithDefaultOccupation = (name, age, sex, occupation = "Developer") => {
    return `Your name is ${name} you are ${age} years old you are a ${sex} your occupation is ${occupation}`
}

const describeJohnResult = describeSomeone("john", 67, "male", "Teacher");
const describeMaryResult = describeSomeone("Mary", 39, "Femail", "Developer");
console.log(describeMaryResult)


const describeSamResult = describeSomeoneWithDefaultOccupation("Sam", 67, "male", "Teacher");
const describeElizabethResult = describeSomeoneWithDefaultOccupation("Elizabeth", 39, "Female");

console.log(describeSamResult)