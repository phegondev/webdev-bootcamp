// LECTURE 19
//creating arrays
let emptyArray = [];

let fruits = ["Apple", "Banana", "Orange"]

//mixed arrays: arrays with different data types
let mixedArray = [1, "Hello", true, null]

//Acceesing Arrays elements
console.log("All fruits: ", fruits)

fruits.forEach(fruit => console.log(fruit));

for(let fruit of fruits){
    console.log(fruit)
}

console.log(fruits[0])
console.log(fruits[fruits.length -1]);

fruits[0]="Mango";

console.log(fruits)