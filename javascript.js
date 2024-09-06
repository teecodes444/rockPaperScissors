//declare variables to track player score
    //declared humanScore and computerScore in global scope
    //initialized both to 0

let humanScore = 0;
let computerScore = 0;

//create a function that randomly returns the computer choice

const cChoice = Math.floor(Math.random() * 3) + 1;
function getComputerChoice() {
    // returns a random number between 1 and 3
   switch (cChoice) {
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

let uChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
 //save user choice in variable to be used in conditional statements
function getHumanChoice() {
    //use switch statements to validate user choice and return input
    switch (uChoice) {
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
    let uChoice = getHumanChoice().toLowerCase();
    let cChoice = getComputerChoice();

    console.log(`You picked ${uChoice} and computer picked ${cChoice}`);
    
    // if (uChoice === cChoice) {
    //     console.log("It's a tie.");
    // } else if (uChoice === 'Rock' && cChoice === 'Scissors') {
    //     console.log('You won!');
    // } else if (uChoice === 'Scissors' && cChoice === 'Paper') {
    //     console.log('You won!');
    // } else if (uChoice === 'Paper' && cChoice === 'Rock') {
    //     console.log('You won!');
    // } else {
    //     console.log('Computer won.')
    // }
    
};

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


//write entire game logic