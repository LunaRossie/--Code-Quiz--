
console.clear();

// The game variables
const inputEl = document.querySelector("input-el");
const checkBtn = document.querySelector("input-el");
console.log(inputEl)




// the modal variables
// modal, the answer, x sign
const modal = document.querySelector(".myModal")
const theAnswer = document.querySelector(".theAnswer")
const closeBtn = document.querySelector(".closeBtn")

// Answers: "Correct" , "Incorrect"
let answerOptions = ["Correct" , "Incorrect"]
console.log(answerOptions)

// check btn function
checkBtn.addEventListener("click",function() {
    let userInput = parseInt(inputEl.value) // number
    console.log(userInput)
    if(userInput === 2) {
        theAnswer.textContent = answerOptions[0]
    }
    else {
        theAnswer.textContent = answerOptions[1]
    }

})
