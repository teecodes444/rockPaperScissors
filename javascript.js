//declare variables to track player score
    //declared humanScore and computerScore in global scope
    //initialized both to 0

let humanScore = 0;
let computerScore = 0;

//create a function that randomly returns the computer choice

function getComputerChoice() {
    const cChoice = Math.floor(Math.random() * 3) + 1;
    // returns a random number between 1 and 3
    return cChoice;
}

console.log(getComputerChoice());

//create a function that takes user choice and return it

function getHumanChoice() {
    let uChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    //save user choice in variable to be used in conditional statements
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

//write entire game logic