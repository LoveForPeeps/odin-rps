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


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Its a tie! You both picked ${humanChoice}.`);
        playRound(getUserChoice(), getComputerChoice());
        return;
    }

    if (humanChoice === "rock" && computerChoice != "paper") {
        console.log(`You won! Rock beat ${computerChoice}.`)
    } else if (humanChoice === "paper" && computerChoice != "scissors") {
        console.log(`You won! Paper beat ${computerChoice}.`)
    } else if (humanChoice === "scissors" && computerChoice != "rock") {
        console.log(`You won! Scissors beat ${computerChoice}.`)
    } else {
        console.log(`You lost! ${humanChoice} loses to ${computerChoice}.`);
        computerScore++;
        return;
    }

    userScore++;
}