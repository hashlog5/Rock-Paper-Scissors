import { game } from './game.js';

//! html & css variables
const ROCK_IMG = 'assets/rock.png';
const LIGHT_COLOR = 'var(--light-color)';
const HAND_COLOR = 'var(--hand-color)';
const CHOICE_COLOR = 'var(--choice-color)';
const PLAY_COLOR = 'var(--play-color)';
const QUIT_COLOR = 'var(--quit-color)';

//! DOM
const startMenu = document.querySelector('.start-menu');
const play = document.querySelector('#play');

const choicesMenu = document.querySelector('.choices-menu');
const choices = document.querySelectorAll('.choices i');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const scoreboard = document.querySelector('.scoreboard');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const quitMenu = document.querySelector('.quit-menu');
const quit = document.querySelector('#quit');

//! events
play.addEventListener('click', playGame);

choices.forEach((choice) =>
  choice.addEventListener('click', () => {
    //! BUG: setting choice-color here seems to remove hover effects on choices
    choice.style.color = CHOICE_COLOR;
    playerChose(choice, choice.id);
  })
);

quit.addEventListener('click', loadGame);

//! app
loadGame();

//! utilities
function loadGame() {
  game.reset();
  resetGameStatus();
  fistHands();
  resetWinnerStatus();
}

function resetGameStatus() {
  startMenu.style.display = 'flex';
  choicesMenu.style.display = 'none';

  scoreboard.classList.remove('show-scoreboard');
  playerScore.textContent = 0;
  computerScore.textContent = 0;

  quitMenu.classList.remove('show-quit-menu');
}

function playGame() {
  disableButtons();

  startMenu.style.display = 'none';
  choicesMenu.style.display = 'flex';
  scoreboard.classList.add('show-scoreboard');
  quitMenu.classList.add('show-quit-menu');

  setTimeout(enableButtons, 500);
}

function animateHands() {
  playerHand.style.animation = 'shakePlayer 1.75s ease';
  computerHand.style.animation = 'shakeComputer 1.75s ease';

  setTimeout(() => {
    playerHand.style.animation = '';
    computerHand.style.animation = '';
  }, 1500);
}

function disableButtons() {
  choicesMenu.style.pointerEvents = 'none';
  quitMenu.style.pointerEvents = 'none';
}

function enableButtons() {
  choicesMenu.style.pointerEvents = 'all';
  quitMenu.style.pointerEvents = 'all';
}

function showChoices(playerChoice, computerChoice) {
  playerHand.src = `assets/${playerChoice}.png`;
  computerHand.src = `assets/${computerChoice}.png`;
}

function setPlayerAsWinner() {
  player.style.color = PLAY_COLOR;
  player.style.fontWeight = 'bold';

  computer.style.color = QUIT_COLOR;
  computer.style.fontWeight = 'normal';
}

function setComputerAsWinner() {
  computer.style.color = PLAY_COLOR;
  computer.style.fontWeight = 'bold';

  player.style.color = QUIT_COLOR;
  player.style.fontWeight = 'normal';
}

function resetWinnerStatus() {
  player.style.color = LIGHT_COLOR;
  player.style.fontWeight = 'normal';

  computer.style.color = LIGHT_COLOR;
  computer.style.fontWeight = 'normal';
}

function fistHands() {
  playerHand.src = ROCK_IMG;
  computerHand.src = ROCK_IMG;
}

//! logic
function playerChose(choice, playerChoice) {
  const computerChoice = computerChose();
  const winner = chooseWinner(playerChoice, computerChoice);

  fistHands();
  resetWinnerStatus();
  disableButtons();
  setTimeout(animateHands, 250);

  setTimeout(() => {
    showChoices(playerChoice, computerChoice);
    updateScores(winner);
  }, 1750);

  setTimeout(() => {
    enableButtons();
    choice.style.color = HAND_COLOR;
  }, 2000);
}

function computerChose() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function chooseWinner(playerChoice, computerChoice) {
  const [rock, paper, scissors] = ['rock', 'paper', 'scissors'];
  const [computer, player, tie] = ['computer', 'player', 'tie'];
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

function updateScores(winner) {
  switch (winner) {
    default:
      break;

    case 'player':
      game.playerEarnPoints();
      setPlayerAsWinner();
      playerScore.textContent = game.playerScore;

      break;

    case 'computer':
      game.computerEarnPoints();
      setComputerAsWinner();
      computerScore.textContent = game.computerScore;
      break;
  }
}
