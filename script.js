let pScore = 0;
let cScore = 0;
let round = 0;


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
    choice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
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

function game(playerChoice) {
    let result = playRound(playerChoice, getComputerChoice());
    if (result == 'win') {
        pScore++;
        round++;
    } else if (result == 'lose') {
        cScore++;
        round++;
    } else {
        round++;
    }
        
    if (round === 5 || pScore === 3 || cScore === 3) {
        if (pScore > cScore) {
            return `You win!`;
        } else if (pScore < cScore) {
            return `You lose!`;
        } else {
            return `Draw!`;
        }
    }
    return ``
}

function resetGame() {
    playerSelection = "Empty";
    computerSelection = "Empty";
    round = "";
    pScore = 0;
    cScore = 0;

    choice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    curRound.textContent = "Round:";
    score.textContent = `Player score: ${pScore}
    Computer score: ${cScore}\r\n`;
    result.textContent = "Result:";

}

const choice = document.querySelector("#choice");
const computerChoice = document.querySelector("#computer");
const score = document.querySelector("#score");
const curRound = document.querySelector("#round");
const result = document.querySelector("#result");

const btn = document.querySelectorAll(".btn");

btn.forEach(element => {  

    element.addEventListener("click", event => {
        if (round === 5 || pScore === (cScore+3) || cScore === (pScore+3)) {
            result.textContent = game(event.target.textContent);
            score.textContent = `Player score: ${pScore}\r\n
            Computer score: ${cScore}\r\n`;
            curRound.textContent = `Round: ${round}`;
            round = 0;
            pScore = 0;
            cScore = 0;
        }
        if (event.target.nodeName == "BUTTON") {
            result.textContent = game(event.target.textContent);
            score.textContent = `Player score: ${pScore}
            Computer score: ${cScore}\r\n`;
            curRound.textContent = `Round: ${round}`;
        }
    });

});

const reset = document.querySelector("#reset");

reset.addEventListener("click", event => {
    resetGame();
});

