// LECTURE 23: Nested Object


//nested object example
let book = {
    title: "JavaScript Basics",
    author: {
        firstName: "John",
        lastName: "Doe"
    }
}

console.log(book.author.firstName)
console.log(book.author.lastName)

console.log(book.title)

console.log(book["title"])