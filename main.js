let playerScore = 0;
let computerScore = 0;

function firstCharToUpper(string) {
    return string.at(0).toUpperCase() + string.slice(1)
}

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

const playerScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const winDisplay = document.querySelector('#win-display')

function getWinner(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice != "paper") {
        return 'player';
    } else if (humanChoice === "paper" && computerChoice != "scissors") {
        return 'player';
    } else if (humanChoice === "scissors" && computerChoice != "rock") {
        return 'player';
    } else {
        return 'computer';
    }
}

const playerOptions = document.querySelector('#options')

const replayButton = document.createElement('button')
replayButton.textContent = 'Replay?'
replayButton.id = 'replay'

function updateDisplays() {
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
    if (playerScore >= 5) {
        winDisplay.textContent = `You Won with a score of ${playerScore} - ${computerScore}!`
        playerOptions.appendChild(replayButton);
    } else if (computerScore >= 5) {
        winDisplay.textContent = `You lost with a score of ${playerScore} - ${computerScore}..`
        playerOptions.appendChild(replayButton);
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        winDisplay.textContent = `It's a tie! You both picked ${firstCharToUpper(humanChoice)}.`;
        return;
    }

    const winner = getWinner(humanChoice, computerChoice)
    if (winner === "player") {
        playerScore++;
        winDisplay.textContent = `You won! ${firstCharToUpper(humanChoice)} beat ${firstCharToUpper(computerChoice)}.`;
    } else {
        computerScore++
        winDisplay.textContent = `You lost.. ${firstCharToUpper(humanChoice)} loses to ${firstCharToUpper(computerChoice)}.`;
    }

    updateDisplays();
}

playerOptions.addEventListener('click', (event) => {
    const target = event.target
    switch(target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            if (computerScore >= 5 || playerScore >= 5) {
                return;
            }
            const computerChoice = getComputerChoice()

            playRound(target.id, computerChoice)
            break;

        case 'replay':
            playerScore = 0;
            computerScore = 0;

            winDisplay.textContent = ""

            event.target.remove();
            updateDisplays();
            break;
    }
})