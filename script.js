// make random computer choise
function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// play a round with playerSelection vs computerSelection
function playRound(playerSelection, computerSelection) {
  const result = document.querySelector('#result');
  const playerScoreShow = document.querySelector('#playerscore');

  // focus buttons choise
  const computerScoreShow = document.querySelector('#computerscore');
  const computRockChoise = document.querySelector('#computerrock');
  const computerscissors = document.querySelector('#computerscissors');
  const computerpaper = document.querySelector('#computerpaper');
  const playerRock = document.querySelector('#rock');
  const playerPaper = document.querySelector('#paper');
  const playerScissors = document.querySelector('#scissors');

  //reset buttons color each round
  computerpaper.style.backgroundColor = '#555';
  computRockChoise.style.backgroundColor = '#555';
  computerscissors.style.backgroundColor = '#555';

  playerRock.style.backgroundColor = '#555';
  playerPaper.style.backgroundColor = '#555';
  playerScissors.style.backgroundColor = '#555';

  // all conditions
  if (playerSelection === computerSelection) {
    result.innerHTML = `draw you chose ${playerSelection} like computer`;
    document.querySelector(`#computer${computerSelection}`).style.backgroundColor = 'red';
    document.querySelector(`#${playerSelection}`).style.backgroundColor = 'red';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    computerscissors.style.backgroundColor = 'red';
    playerRock.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you chose ${playerSelection} computer chose ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerpaper.style.backgroundColor = 'red';
    playerScissors.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you chose ${playerSelection} computer chose ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computRockChoise.style.backgroundColor = 'red';
    playerPaper.style.backgroundColor = 'red';
    playerScore++;
    result.innerHTML = `You win, you chose ${playerSelection} computer chose ${computerSelection}`;
  } else {
    computerScore++;
    document.querySelector(`#computer${computerSelection}`).style.backgroundColor = 'red';
    document.querySelector(`#${playerSelection}`).style.backgroundColor = 'red';
    result.innerHTML = `computer win, you chose ${playerSelection} computer chose ${computerSelection}`;
  }
  playerScoreShow.innerHTML = `score : ${playerScore}`;
  computerScoreShow.innerHTML = `score : ${computerScore}`;
}

// init score
let playerScore = 0;
let computerScore = 0;

const game = (playerSelection) => {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

// select button to start game
const buttons = document.querySelectorAll('.button');
const startround = buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game(playerSelection);
  });
});
