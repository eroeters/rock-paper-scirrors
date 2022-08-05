// working console game

// function playRound(playerSelection) {
//     let compChoice = ["Rock", "Paper", "Scissors"];
//     let randomizer = Math.floor(Math.random()* 3);
//     let compGuess = compChoice[randomizer];
//     let playerGuess = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

//     if (playerGuess == "Rock" || playerGuess == "Paper" || playerGuess == "Scissors") {

//         //computer guesses paper

//         if (playerGuess == "Rock" && compGuess == "Paper") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Paper covers rock, the computer wins!");
//         } else if (playerGuess == "Paper" && compGuess == "Paper") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("It's a tie! Try again.");
//         } else if (playerGuess == "Scissors" && compGuess == "Paper") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Scissors cut paper, you win!");
//         }

//         //computer guesses rock

//         else if (playerGuess == "Rock" && compGuess == "Rock") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("It's a tie! Try again.");
//         } else if (playerGuess == "Paper" && compGuess == "Rock") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Paper covers rock, you win!");
//         } else if (playerGuess == "Scissors" && compGuess == "Rock") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Rock smashes scissors, the computer wins!");
//         }
//         //computer guesses scissors

//         if (playerGuess == "Rock" && compGuess == "Scissors") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Rock smashes scissors, you win!");
//         } else if (playerGuess == "Paper" && compGuess == "Scissors") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("Scissors cut paper, the computer wins!");
//         } else if (playerGuess == "Scissors" && compGuess == "Scissors") {
//             console.log(`The computer has chosen ${compGuess}`)
//             console.log("It's a tie! Try again.");
//         }
//     } else {
//         return "Please enter Rock, Paper, or Scissors";
//     }
// }

// let rock = document.getElementById("rock").value; 
// let paper = document.getElementById("paper").value; 
// let scissors = document.getElementById("scissors").value; 

function computerGuess() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    const randomizer = Math.floor(Math.random()* 3);
    return compChoice[randomizer];
}

let playerChoice = document.querySelectorAll(".buttonClick");

playerChoice.forEach(e1 => {
    e1.addEventListener("click", output);
});

function output() {
    console.log(this.value)
    return this.value;
}

function game() {
    
}