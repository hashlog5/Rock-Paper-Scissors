const startMenu = document.querySelector('.start-menu');
const optionsMenu = document.querySelector('.options-menu');
const scoreboard = document.querySelector('.scoreboard');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

export const loadGame = () => {
  optionsMenu.style.display = 'none';
  scoreboard.style.display = 'none';
};

export const startGame = () => {
  startMenu.style.display = 'none';
  optionsMenu.style.display = 'flex';
  scoreboard.style.display = 'grid';
};

export const play = () => {
  console.log('play');
};
