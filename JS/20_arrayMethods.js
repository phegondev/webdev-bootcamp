// LECTURE 20
//arrays methods
let colors = ["Red", "Green", "Blue"];
console.log("Original colors:", colors);

//to add an item
colors.push("Orange");
console.log("After push('Orange'):", colors);

//to remove item
colors.pop();
console.log("After pop():", colors);


// Add to start
colors.unshift("Purple")
console.log("After unshift('Purple'):", colors);

// Remove from start
colors.shift();
console.log("After shift():", colors);


//combine arrays
let moreColors = ["Yellow", "Cyan"];
let allColors = colors.concat(moreColors);
console.log("Combined colors (allColors):", allColors);

// Copy part of array
// slice(startIndex, endIndex) - endIndex is exclusive
let someColors = allColors.slice(1, 4);
console.log("Sliced colors (someColors):", someColors); 

// Find index
let blueIndex = allColors.indexOf("Blue")
console.log("Index of 'Blue' in allColors:", blueIndex);

let notFoundIndex = allColors.indexOf("jfhfhdhfjdhhgfd");
console.log("Index of jfhfhdhfjdhhgfd is: ", notFoundIndex);
