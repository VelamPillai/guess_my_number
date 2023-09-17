let guessingNumberFn = () => Math.floor((Math.random() * 20) + 1);
let guessingNumber = guessingNumberFn();
let scoreValue = 20;
let highScore = 0;

const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const message = document.querySelector(".message");
const again = document.querySelector(".again");

// function to compare the numbers

function compareNumbers() {
    console.log(guessingNumber, Number(guess.value));
    if (guessingNumber === Number(guess.value)) {
        message.textContent = "Correct Number!";
        document.querySelector("body").style.backgroundColor = "green";
        score.textContent = ++scoreValue;
        if (highScore < scoreValue) {
            highScore = scoreValue;
        }
        highscore.textContent = highScore;
        number.textContent = guessingNumber;
        check.disabled = true;
        console.log("Congrates....you won!!!!");
    }
   
    else if (guessingNumber !== Number(guess.value)) {
         if (guessingNumber > Number(guess.value)) {
           message.textContent = "too Low!";
         }

 if (guessingNumber <Number(guess.value)) {
   message.textContent = "too High!";
 }        
        document.querySelector("body").style.backgroundColor = "black";

        score.textContent = --scoreValue;
        
        console.log(scoreValue);
    }
}

// function to reset the values of the state to play again
const resetValues = () => {
    guessingNumber= guessingNumberFn();
    number.textContent = "?";
    score.textContent = "20";
    scoreValue = 20;
    guess.value = "";
    check.disabled = false;
        document.querySelector("body").style.backgroundColor = "black";


}

check.addEventListener("click", compareNumbers);
again.addEventListener("click", resetValues);
// clear the input when it is focused
guess.addEventListener("focus", () => { guess.value = "" });
