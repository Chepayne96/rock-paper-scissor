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

function getHumanChoice() {
    return prompt("Please select choice ").toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === humanChoice) {
        console.log("Tie");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human Wins");
        playerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        console.log("Human Wins");
        playerScore++;
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        console.log("Human Wins");
        playerScore++;
    } else {
        console.log("Computer Wins");
        computerScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("Human Wins Game");
    } else {
        console.log("Computer Wins Game");
    }
}

playGame()