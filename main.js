let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#resultsDiv");
const para = document.createElement('p');

const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
    
    /* function playGame() {
    
        let humanChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();

        function getHumanChoice() {
       
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
    
        console.log('You picked: '  getHumanChoice()); */
    
        
    
// const computerChoice = Math.floor(Math.random() * 3)  1;
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
         
    switch (computerChoice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        }
    };

        // console.log('Computer picked: '  getComputerChoice());  


function playRound(humanChoice, computerChoice) {
            
    if (humanChoice === computerChoice) {
       // const para = document.createElement('p');
       para.innerText = 'It\'s a tie.\n';
       resultsDiv.appendChild(para);
   } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
       // const para = document.createElement('p');
       para.innerText = `You won! ${humanChoice} beats ${computerChoice}!\n`;
       humanScore++;
       resultsDiv.appendChild(para);
   } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
       // const para = document.createElement('p');
       para.innerText = `You won! ${humanChoice} beats ${computerChoice}!\n`;
       humanScore++;
       resultsDiv.appendChild(para);
   } else if (humanChoice === 'paper' && computerChoice === 'rock') {
       // const para = document.createElement('p');
       para.innerText = `You won! ${humanChoice} beats ${computerChoice}!\n`;
       humanScore++;
       resultsDiv.appendChild(para);
   } else {
       // const para = document.createElement('p');
       para.innerText = `You lost. ${computerChoice} beats ${humanChoice}!\n`;
       computerScore++;
       resultsDiv.appendChild(para);
   }

};

const winner = (humanScore, computerScore) => {
    if (humanScore === 5) {
        const h3 = document.createElement('h3')
        h3.style.color = "green";
        h3.innerText = `You won!\nYou scored: ${humanScore} points. Computer scored: ${computerScore} points.`
        resultsDiv.append(h3);
    } else if (computerScore === 5) {
        const h3 = document.createElement('h3')
        h3.style.color = "darkred";
        h3.innerText = `You lost!\nComputer scored: ${computerScore} points. You scored: ${humanScore} points.`
        resultsDiv.append(h3);
    }
};

const updateScore = (playerScore, compScore) => {
    playerScore.innerText = `Player Score: ${humanScore}`;
    compScore.innerText = `Computer Score: ${computerScore}`;
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'rock'
    playRound(humanSelection, computerSelection)
    updateScore(playerScore, compScore)
    winner(humanScore, computerScore)
});

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'paper'
    playRound(humanSelection, computerSelection)
    updateScore(playerScore, compScore)
    winner(humanScore, computerScore)

});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'scissors'
    playRound(humanSelection, computerSelection)
    updateScore(playerScore, compScore)
    winner(humanScore, computerScore)
});
    
    
    
    /* let game;
    for (game = 1; game <= 5; game) {
        playGame();
        console.log('Your score: '  humanScore);
        console.log('Computer score: '  computerScore);
    }; */

