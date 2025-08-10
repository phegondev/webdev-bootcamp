// LECTURE 29: CLASSES

//class
// a class is used to create an object

class Calculator {

    //methods
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

}

// We create a new instance of the 'Calculator' class using the 'new' keyword.
// This creates an object, 'calc', that has the 'add' and 'subtract' methods.
const calculatorObject = new Calculator();

const additionResult = calculatorObject.add(5, 3);

const subtractionValue = calculatorObject.subtract(6, 2);

console.log(additionResult);
console.log(subtractionValue);



class Book {

    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }

    borrow() {
        if (this.available) {
            this.available = false;
            return `You have borrowed a book of title: ${this.title}`
        }
    }
    returnBook() {
        this.available = true;
        return `Thanks for returning "${this.title}"`;
    }
}

const book1 = new Book("The Great Controversy", "Ellen G WHite");

console.log(book1.borrow())
console.log(book1.returnBook())



//inheritance example.
// Ebook is the child class while Book is the parent class
class Ebook extends Book {

    constructor(title, author, fileSize) {
        super(title, author) // Call parent constructor
        this.fileSize = fileSize + "MB";
    }
    download() {
        return `Downloading ${this.title} (${this.fileSize})...`;
    }
}

const eBook = new Ebook("JavaScript Guide", "MDN", 15);

console.log(eBook.borrow())
console.log(eBook.returnBook())
console.log(eBook.download())