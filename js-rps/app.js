console.log("get ready to rumble")

//*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/
let playerChoice; // = rock, paper or scissors eventually
let computerChoice; 
let msg;


/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display')

/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
    playerChoice = event.target.id
  };

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)// 0, 1, 2
    computerChoice = choices[randomIndex] // 'rock', 'paper', 'scissors'
  }

  const render = (event) => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
  }

  const compare = () => {
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
  };   

  const play = (event) => {
    getPlayerChoice(event);
    getComputerChoice()
    // console.log(playerChoice)
    // console.log(computerChoice)
    compare()
    render()
  };           // this order is very important --> 3 phases to the game logic
 
  
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);
