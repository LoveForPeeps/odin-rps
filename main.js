let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getUserChoice() {
    return prompt("Rock, paper, scissors?");
}