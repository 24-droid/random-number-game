const form = document.querySelector("form");
let lives = document.querySelector(".lives");
let remaining = document.querySelector(".remaining");
let count = 0;
let previous = document.querySelector(".guesses");
let totalGuesses = [];
let context = document.querySelector(".context");
let input, number;
let attemptsRemaining = 10;
number = Math.floor(Math.random() * 100);
form.addEventListener("submit", function (e) {
    input = parseInt(document.querySelector("#input").value);


    e.preventDefault();
    if (input < 0 || input > 100 || isNaN(input) || input === "") {
        context.innerHTML = "Please enter valid input";
    }
    else if (input === number) {
        context.innerHTML = "That's The Right Guess";
        gameOver();
    }
    else if (input != number) {
        context.innerHTML = "Wrong Guess :( Keep Trying";
    }
    totalGuesses.push(input);
    count++;
    attemptsRemaining--;
    previous.innerHTML = totalGuesses.join(",");
    remaining.innerHTML = `Guesses Remaining ${attemptsRemaining}`;


    if (count === 10) {
        context.innerHTML = "GAME OVER!!!";
        gameOver();
        console.log(number);
    }

});
function gameOver() {
    lives.innerHTML = `The Number was ${number}`;
    let continueGame = confirm("Do you want to play Again?");
    if (continueGame) {
        resetGame();
    }
}
function resetGame() {
    input = "";
    context.innerHTML = "Try and Guess a random number between 1 and 100.";
    lives.innerHTML = "You have 10 attempts to guess the right number.";
    attemptsRemaining = 10;
    totalGuesses = [];
    count = 0;
    previous.innerHTML = "";
    remaining.innerHTML = "Guesses Remaining : 10";
    number = Math.floor(Math.random() * 100);



}
resetGame();

