let playerScore = 0;
let computerScore = 0;

//function computerPlay() that will randomly return either Rock, Paper or Scissors
function computerPlay () {
    let options = ['rock', 'paper', 'scissors'];
    let result = options[Math.floor(Math.random() * options.length)];
    return result;
};

//extra: function playerPlay() for player input
function playerPlay() {
    let input = prompt('Please enter input','');
    let caseInsenInput = input.toLowerCase();
    return caseInsenInput;
};

//function playRound() that plays a round wtih two parameters playerSelection and computerSelection
function playRound (playerSelection, computerSelection) {
    let WinnerResult = '';
        
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log (`Player wins the round!`);
        playerScore += 1;

    // } else if (typeof(playerSelection) === 'undefined' && typeof(computerSelection) === "undefined") {
    //     console.log('parameters are undefined'); 
    //not passing parameter to playRound() problem log test
    
    } else if (playerSelection === computerSelection) {
        console.log (`Round Draw!`);
        
    } else {
        console.log (`Computer wins the round!`);
        computerScore += 1;
    };

    if (playerScore > computerScore) {
        WinnerResult = (`Player has won the game!`);
    } else if (computerScore > playerScore) {
        WinnerResult = (`Computer has won the game!`);
    } else {
        WinnerResult = (`No winners! It's a Draw!`);
    }
    console.log(WinnerResult);
};

//function game() that calls playRound() inside to play 5 rounds of game,
//keep scores
//declare winner or loser at the end.
function game() {

    for(let i = 1; i < 6; i++) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        console.log(`[Play turn ${i}] Player chose: ${playerSelection} | Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection)); // <===* i got hugeee problem here and couldnt find where to fix for so long when i just used playRound() only.
//Here is what went wrong...
//I am not passing parameters to playerSelection and computerSelection that the constructor of playRound() expects. playRound() gets no paramenter string values.
//So, both variables are set to "undefined" and you have no condition in your code to handle that. 
//Alternatively, remove it from the constructor if you want to use the globally declared variables of the same name.

    }
};