// LECTURE 26: FUNCTION

//define

function myName() {
    console.log("My name is Dennis")
}

function returnMyName() {
    return "Dennis";
}

//call or invoke
// myName();
const nameResult = returnMyName();
console.log(nameResult);


///Function Expression approach
const expressMyName = function () {
    return "Hello Sam!"
}

console.log(expressMyName());


//ARROW FUNCTION
const myNameArror = () => {
    console.log("Hey you!!")
}


myNameArror();

const myNameArrorWithreturn = () => {
    return "Hey, my name is Sarah! 🙈";
}

const myNameArrorWithreturnValue = myNameArrorWithreturn();
console.log(myNameArrorWithreturnValue);


const returnNameSimplified = () => "Simplifed return 😁";

console.log(returnNameSimplified());