
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


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
    let choice = prompt("Please select choice ").toLowerCase();
    return choice;
}

console.log(getHumanChoice())