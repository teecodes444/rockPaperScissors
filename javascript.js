//declare variables to track player score
    //declared humanScore and computerScore in global scope
    //initialized both to 0

let humanScore = 0;
let computerScore = 0;

//create a function that randomly returns the computer choice

const computerChoice = Math.floor(Math.random() * 3) + 1;
function getComputerChoice() {
    // returns a random number between 1 and 3
   switch (computerChoice) {
    case 1:
        return 'Rock';
        break;
    case 2:
        return 'Paper';
        break;
    case 3:
        return 'Scissors'
        break;
   }
};

console.log(getComputerChoice());

//create a function that takes user choice and return it

let humanChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
 //save user choice in variable to be used in conditional statements
function getHumanChoice() {
    //use switch statements to validate user choice and return input
    switch (humanChoice) {
        case 'rock':
            return 'Rock';
            break;
        case 'paper':
            return 'Paper';
            break;
        case 'scissors':
            return 'Scissors';
            break;
        default:
            return 'Not a valid choice.';
    }
}

console.log(getHumanChoice());



//write single round logic
    // take user choice
    // take computer choice
    // compare choices
    // increment winner's score
    // log winner announcement
    
    //rock beats scissors
    //scissors beats paper
    //paper beats rock

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie. You picked ${humanChoice} and computer picked ${computerChoice}`);
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`)
        humanScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`)
        humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`)
        humanScore++;
    } else {
        console.log(`You lost. ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }
    
};

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// console.log(humanScore);
// console.log(computerScore);

//write entire game logic
    //create a function to call playRound
        //call it 5X
    //keep track of score
    //declare winner after 5 games

function playGame() {

};