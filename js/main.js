import { game } from './game.js';

const startMenu = document.querySelector('.start-menu');
const playButton = document.querySelector('#play-button');
const optionsMenu = document.querySelector('.options-menu');
const choices = document.querySelectorAll('.choices i');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const scoreboard = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

// addEventListeners
playButton.addEventListener('click', startGame);

choices.forEach((choice) =>
  choice.addEventListener('click', () => playerChoice(choice.id))
);

loadGame();

// utilities
function loadGame() {
  optionsMenu.style.display = 'none';
  scoreboard.style.display = 'none';
}

function startGame() {
  startMenu.style.display = 'none';
  optionsMenu.style.display = 'flex';
  scoreboard.style.display = 'grid';
}

// logic
function playerChoice(id) {
  const playerChose = id;
  console.log(playerChose);
}

function computerChose() {
  const choices = ['rock', 'paper', 'scissors'];
  return Math.floor(Math.random() * 3);
}
