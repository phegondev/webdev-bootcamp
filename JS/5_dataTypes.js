// Lecture 5

//PRIMITIVE EXAMPLES

let age = 25; //number
let name = 'Bob'; //string
let firstName = "Sam"; //string
let bigNumber = 1234567890n; //bigint
let isStudent = true; //boolean(true or false data)
let notAssigned; //undefined
let id = Symbol("2");  //Symbol
let nothing = null; //null



//SOME NON-PRIMITIVE EXAMPLES
let person = { name: "Bob", age:"34", race:"asian", sex:"male" } //object
let colors = [ "red", "blue", "white", "green" ] // array

function sayHi(){
    console.log("Hi all 😁")
}


// console.log(age)
// console.log(name)
// console.log(firstName)
// console.log(isStudent)
// console.log(colors)

console.log(typeof age)
console.log(typeof name)
console.log(typeof person)
console.log(typeof sayHi)
console.log(typeof colors)
