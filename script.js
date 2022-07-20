
function getComputerChoice() {
    compChoice = parseInt(Math.floor(Math.random()*(9-1+1)+1));
    console.log(compChoice);
    if (compChoice <= 3) {
        return "Rock";
    } else if (compChoice <= 6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());