import { game } from './game.js';

//! UI
const startMenu = document.querySelector('.start-menu');
const playButton = document.querySelector('#play-button');

const optionsMenu = document.querySelector('.options-menu');
const choices = document.querySelectorAll('.choices i');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const scoreboard = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

//! events
playButton.addEventListener('click', startGame);

choices.forEach((choice) =>
  choice.addEventListener('click', () => playerChose(choice.id))
);

//! app
loadGame();

//! utilities
function loadGame() {
  optionsMenu.style.display = 'none';
  scoreboard.style.display = 'none';
}

function startGame() {
  startMenu.style.display = 'none';
  optionsMenu.style.display = 'flex';
  scoreboard.style.display = 'grid';
}

//! logic
function playerChose(playerChoice) {
  const computerChoice = computerChose();
  const winner = compareChoices(playerChoice, computerChoice);

  console.log(
    `player: ${playerChoice}, computer: ${computerChoice}, winner: ${winner}`
  );
}

function computerChose() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function compareChoices(playerChoice, computerChoice) {
  const rock = 'rock';
  const paper = 'paper';
  const scissors = 'scissors';

  const computer = 'computer';
  const player = 'player';
  const tie = 'tie';

  let winner;

  if (playerChoice === computerChoice) {
    winner = tie;
  } else if (playerChoice === rock) {
    computerChoice === paper ? (winner = computer) : (winner = player);
  } else if (playerChoice === paper) {
    computerChoice === scissors ? (winner = computer) : (winner = player);
  } else if (playerChoice === scissors) {
    computerChoice === rock ? (winner = computer) : (winner = player);
  }

  return winner;
}
