// LECTURE 21

let numbers = [10, 20, 30];


//map() (Creates New Array). it takes each element of the array and apply a function to it
let doubled = numbers.map(num => num * 3);
console.log(doubled);

for (let num of doubled) {
    console.log(num)
}


