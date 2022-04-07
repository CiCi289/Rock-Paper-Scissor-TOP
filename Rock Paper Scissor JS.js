
//input from Player , input from Computer
let playerChoices;
let computerChoices = ['rock', 'paper', 'scissors'];
let playerScore

function computerPlay () {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
};

//function that plays a round wtih two parameters playerSelection and computerSelection
function playRound (playerSelection, computerSelection) {
    let playerPoint = 0;

    if  ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerPoint = 1;
            console.log ('You win!' + playerSelection + ' beats ' + computerSelection)
        } else {
            console.log('You lose!' + computerSelection + ' beats ' + playerSelection)
        } 
    return playerPoint

}