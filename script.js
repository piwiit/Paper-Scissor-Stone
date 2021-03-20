function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// play a round with playerSelection vs computerSelection
function playRound(playerSelection, computerSelection) {
  const result = document.querySelector('#result');
  const playerScoreShow = document.querySelector('#playerscore');
  const computerScoreShow = document.querySelector('#computerscore');
  const computRockChoise = document.querySelector('#computerrock');
  const computerscissors = document.querySelector('#computerscissors');
  const computerpaper = document.querySelector('#computerpaper');

  computerpaper.style.backgroundColor = '#555';
  computRockChoise.style.backgroundColor = '#555';
  computerscissors.style.backgroundColor = '#555';

  if (playerSelection === computerSelection) {
    result.innerHTML = `draw you choise ${playerSelection} like computer`;
    document.querySelector(`#computer${computerSelection}`).style.backgroundColor = 'red';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    computerscissors.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you choise ${playerSelection} computer choise ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerpaper.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you choise ${playerSelection} computer choise ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computRockChoise.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you choise ${playerSelection} computer choise ${computerSelection}`;
  } else {
    computerScore++;
    document.querySelector(`#computer${computerSelection}`).style.backgroundColor = 'red';
    result.innerHTML = `computer win, you choise ${playerSelection} computer choise ${computerSelection}`;
  }
  playerScoreShow.innerHTML = `score : ${playerScore}`;
  computerScoreShow.innerHTML = `score : ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

let game = (playerSelection) => {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
};

const buttons = document.querySelectorAll('.button');
const startround = buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    console.log(playerSelection);
    game(playerSelection);
  });
});
