// LECTURE 16;

// foreach loop

let fruitsArray = ["Apple", "Banana", "Orange", "Mango", "Pear"];

// fruitsArray.forEach(function (fruit) {
//     console.log(fruit)
// });

// fruitsArray.forEach(fruit => console.log(fruit));

fruitsArray.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`)
})