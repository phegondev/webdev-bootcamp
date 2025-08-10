// LECTRUE 28: SCOPE

//globl scope vs local scope



// Local Scope
// Local scope is created inside a function. Variables defined within a function are only accessible within that 
// function and are not visible from the outside. Once the function finishes executing, 
// these variables are typically destroyed.

// Think of it like a private meeting room. What's discussed inside the room stays inside the room; 
// people outside can't hear it.



//Global scope

// For Global scope,Variables declared in the global scope can be accessed and 
// modified from anywhere in your code, including inside functions.

// Think of it like a public announcement board. Anyone, anywhere can read what's on it.



let globalScope = "I'm a global guy";

const showScope = () => {
    let localScope = "I'm local";
    console.log(localScope); // Accessible
    console.log(globalScope); // Accessible
}

showScope();

console.log(localScope); //// Error - out of scope
