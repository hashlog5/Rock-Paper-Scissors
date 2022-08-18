//! assets variables
const ROCK_IMG = 'assets/rock.png';

//! css variables
const LIGHT_COLOR = 'var(--light-color)';
const CHOICE_COLOR = 'var(--choice-color)';
const PLAY_COLOR = 'var(--play-color)';
const QUIT_COLOR = 'var(--quit-color)';

//! UI: game displays and status
const startMenu = document.querySelector('.start-menu');
const choicesMenu = document.querySelector('.choices-menu');
const quitMenu = document.querySelector('.quit-menu');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const scoreboard = document.querySelector('.scoreboard');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

//! utilities
export const resetGameDisplay = () => {
  startMenu.style.display = 'flex';
  choicesMenu.style.display = 'none';

  scoreboard.classList.remove('show-scoreboard');
  playerScore.textContent = 0;
  computerScore.textContent = 0;

  quitMenu.classList.remove('show-quit-menu');
};

export const showFists = () => {
  playerHand.src = ROCK_IMG;
  computerHand.src = ROCK_IMG;
};

export const resetWinnerStatus = () => {
  player.style.color = LIGHT_COLOR;
  player.style.fontWeight = 'normal';

  computer.style.color = LIGHT_COLOR;
  computer.style.fontWeight = 'normal';
};

export const playGame = () => {
  disableButtons();

  startMenu.style.display = 'none';
  choicesMenu.style.display = 'flex';
  scoreboard.classList.add('show-scoreboard');
  quitMenu.classList.add('show-quit-menu');

  setTimeout(enableButtons, 500);
};

export const disableButtons = () => {
  choicesMenu.style.pointerEvents = 'none';
  quitMenu.style.pointerEvents = 'none';
};

export const enableButtons = () => {
  choicesMenu.style.pointerEvents = 'all';
  quitMenu.style.pointerEvents = 'all';
};

export const animateHands = () => {
  playerHand.style.animation = 'shakePlayerHand 1.75s ease';
  computerHand.style.animation = 'shakeComputerHand 1.75s ease';

  setTimeout(() => {
    playerHand.style.animation = '';
    computerHand.style.animation = '';
  }, 1500);
};

export const showChoices = (playerChoice, computerChoice) => {
  playerHand.src = `assets/${playerChoice}.png`;
  computerHand.src = `assets/${computerChoice}.png`;
};

export const setPlayerAsWinner = () => {
  player.style.color = PLAY_COLOR;
  player.style.fontWeight = 'bold';

  computer.style.color = QUIT_COLOR;
  computer.style.fontWeight = 'normal';
};

export const setComputerAsWinner = () => {
  computer.style.color = PLAY_COLOR;
  computer.style.fontWeight = 'bold';

  player.style.color = QUIT_COLOR;
  player.style.fontWeight = 'normal';
};

export const updatePlayerScore = (playerPoints) => {
  playerScore.textContent = playerPoints;
};

export const updateComputerScore = (computerPoints) => {
  computerScore.textContent = computerPoints;
};

export const setChoiceColor = (choice) => {
  choice.style.color = CHOICE_COLOR;
};

export const removeChoiceColor = (choice) => {
  choice.style.color = '';
};
