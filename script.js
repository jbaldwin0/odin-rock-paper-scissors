
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
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
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
    } else if (playerSelection === computerSelection){
        return 'tie';
    } 
}

function game() {
    let round = 0;
    let pScore = 0;
    let cScore = 0;
    while (round < 5) {
        let playerChoice = prompt('Rock, paper, or scissors?')
        let result = playRound(playerChoice, getComputerChoice());
        if (result == 'win') {
            pScore++;
            round++;
            console.log('You have won the round');
        } else if (result == 'lose') {
            cScore++;
            round++;
            console.log('You have lost the round');
        } else if (result == 'tie') {
            console.log('The round was a tie');
            round++;
        } else {
            console.log('Invalid input, please try again.');
        }
        console.log(`Player: ${pScore} Computer: ${cScore}`);
        
        if (pScore == 3 || cScore == 3) {
            break;
        }
    }
    if (pScore > cScore) {
        return `You have won with a score of ${pScore}`
    } else if (pScore < cScore) {
        return `The computer won with a score of ${cScore}`
    } else {
        return 'The game has ended with a tie.'
    }
}

console.log(game());
