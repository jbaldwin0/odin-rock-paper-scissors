
function getComputerChoice() {
    compChoice = parseInt(Math.floor(Math.random()*(3-1+1)+1));

    if (compChoice <= 1) {
        return "Rock";
    } else if (compChoice <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return 'lose';
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return 'win';
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return 'lose';
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return 'win';
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return 'lose';
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return 'win';
    } else {
        return 'tie';
    }
}

console.log(playRound('scissors', getComputerChoice()));