const playerPoints = document.querySelector('.playerScore');
const computerPoints = document.querySelector('.computerScore');
const displayWinner = document.querySelector('.winnerDisplay');

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 10 % 3);
    if (randInt === 0) {
        return "rock";
    } else if (randInt === 1) {
        return "paper";
    } else {
        return "scissor"
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound (btn) {
    let computerChoice = getComputerChoice();
    let humanChoice = btn.textContent;
    if (computerChoice === humanChoice) {
        console.log("Tie");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human Wins");
        playerScore++;
        updateScore()
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        console.log("Human Wins");
        playerScore++;
        updateScore()
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        console.log("Human Wins");
        playerScore++;
        updateScore()
    } else {
        console.log("Computer Wins");
        computerScore++;
        updateScore()
    };
    if (playerScore === 5) {
        displayWinner.textContent = 'Player Wins';
    } else if (computerScore === 5) {
        displayWinner.textContent = 'Computer Wins';
    }
}

function updateScore() {
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
}

function clearRound() {
    playerPoints.textContent = '';
    computerPoints.textContent = '';
    displayWinner.textContent = '';
}