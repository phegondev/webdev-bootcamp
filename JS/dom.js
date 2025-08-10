//DOM

//Change heading text (using getElementById)

document.getElementById("main-heading").textContent = "Modified Heading with getElementById!";

//Modify first paragraph (using querySelector)
const firstPara = document.querySelector(".text-paragraph");
firstPara.style.color = "red"
firstPara.style.fontSize = "30px"
firstPara.textContent += " (Modified by JavaScript!)";


//Modify ALL paragraphs (using querySelectorAll)
const allParagraphs = document.querySelectorAll("p");//an arrays of object(elements)
allParagraphs.forEach(para => {
    para.style.background = "yellow";
    para.style.padding = "10px";
})


//add new heading
const newParagraph = document.createElement('h3')
newParagraph.textContent = "New Heading added by JavaScript!";
document.body.appendChild(newParagraph)

