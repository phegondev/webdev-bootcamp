// LECTURE: 10
// STRING CREATION

//Single/Double Quotes string creationg
let greeting = 'Hello';
let myName = "Bob";

let str3 = new String("Hey");// rarely used

//Concatenation
let fullGreeting = greeting + " " + myName;

console.log(fullGreeting)

//template literals
let fullGreetingTemplateLiteral = `${greeting} ${myName}`
console.log(fullGreetingTemplateLiteral);




// ===== STRING MANIPULATION ===== //
// ===== COMMON STRING METHODS ===== //
let text = "JavaScript is awesome!";

console.log(text.length); //get the total characters(length) of the content in the string

//Accessing Characters in a string
console.log(text.charAt(0));
console.log(text[0])

//Changing Case i.e toUppercase or lower et.c
console.log(text.toUpperCase())
console.log(text.toLowerCase())

//Substring
const subStrResult = text.substring(0, 4);
// console.log(subStrResult)
const sliceResult = text.slice(0, 4);
// console.log(sliceResult)

// Searching
console.log(text.indexOf("is"));
console.log(text.includes("awesome"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("awesome!"))

//Replacing
const newText = text.replace("awesome", "amazing");
// console.log(newText)

//Splitting & Joining
let splitedWords = text.split(" "); // ["JavaScript", "is", "awesome!"]
console.log(splitedWords);

const joinedWords = splitedWords.join("-")
console.log(joinedWords)

//Trimming

let spacedText = "     Hello World!       ";
console.log(spacedText)
console.log(spacedText.trim())
console.log(spacedText.trimStart())
console.log(spacedText.trimEnd())



// ===== SPECIAL CHARACTERS ===== //
console.log('First line \nsecond line \n3rd line')
console.log("hello my name is \"Bob\" ")




//===  vs == (comparism and equality )

const isEquals1 = "hello" === "hello";
const isEquals2 = "hello" == "hello";

console.log(isEquals1);
console.log(isEquals2);

const isEquals3 = "5" === 5; //false. it compares both values and data types
const isEquals4 = "5" == 5; //true. it compares values only. (type coercion)

console.log(isEquals3);
console.log(isEquals4);

