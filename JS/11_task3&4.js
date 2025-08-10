//LECTURE 11
//TASK 3 SOLUTUON 1

let urlString = "https://phegon.com/course?id=12332";

let splitResult = urlString.split("id=");//split into arry of two parts, the 2nd containing the id value
// console.log(splitResult)

let courseId = splitResult[1]
console.log("Course Id Is: " + courseId)

//TASK 3 SOLUTION 2
let actualUrl = new URL(urlString);
let courseId2 = actualUrl.searchParams.get("id");

console.log("Course Id Solution B Is: " + courseId2)





//TASK 4 SOLUTUON 1

function isStrongPassword(password) {

    //1 check if password length is greater than 6
    const isLongEnough = password.length > 6;

    //2 chack if password has a letter either a lowercase or uppercase
    const hasLetter = /[a-zA-Z]/.test(password);

    //3 check if it has a number
    const hasNumber = /[0-9]/.test(password);

    return isLongEnough && hasLetter && hasNumber;

}

const result = isStrongPassword("longenough34");
// console.log(result);

function isStrongPasswordB(pwd) {
    return pwd.length > 6 &&
        /[a-zA-Z]/.test(pwd) &&
        /[0-9]/.test(pwd)
}

const result2 = isStrongPasswordB("GoodPass1");
const result3 = isStrongPasswordB("Password1");
const result4 = isStrongPasswordB("fjksjdfjdjf");
const result5 = isStrongPasswordB("54857475674");
const result6 = isStrongPasswordB("longenough");
const result7 = isStrongPasswordB("dksdj438743");

console.log("Task 4 solution B test: " + result2)
console.log("Task 4 solution B test: " + result3)
console.log("Task 4 solution B test: " + result4)
console.log("Task 4 solution B test: " + result5)
console.log("Task 4 solution B test: " + result6)
console.log("Task 4 solution B test: " + result7)



