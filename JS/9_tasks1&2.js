//LECTURE 9
//TASK 1:Calculate the Area of a Circle.  (Solution A)

let radius = 5;
let pi = Math.PI;

const area = pi * radius ** 2; //formuar πr²
console.log("Area Is: " + area.toFixed(2));


//TASK 1:Calculate the Area of a Circle.  (Solution B)
let radiusSquare  = Math.pow(radius, 2); //redius raise to power 2. or the square of radius
const area2 = pi * radiusSquare;

console.log("Area Solution B is: " + area2.toFixed(2));






//Task 2: Convert Fahrenheit to Celsius
let fahrenheit = 112;
let celsius = (fahrenheit-32) * 5/9;
console.log('112F is equivalent to: ' + celsius.toFixed(2) + '℃')