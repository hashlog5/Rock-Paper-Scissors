import { game } from './game.js';

const ROCK_IMG = 'assets/rock.png';

//! DOM
const startMenu = document.querySelector('.start-menu');
const play = document.querySelector('#play');

const choicesMenu = document.querySelector('.choices-menu');
const choices = document.querySelectorAll('.choices i');

const optionsMenu = document.querySelector('.options-menu');
const options = document.querySelectorAll('.options i');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const scoreboard = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

//! events
play.addEventListener('click', startGame);

options.forEach((option) =>
  option.addEventListener('click', () => chooseOption(option.id))
);

choices.forEach((choice) =>
  choice.addEventListener('click', () => playerChose(choice.id))
);

//! app
loadGame();

//! utilities
function loadGame() {
  game.reset();
  playerScore.textContent = 0;
  computerScore.textContent = 0;

  startMenu.style.display = 'flex';
  choicesMenu.style.display = 'none';
  optionsMenu.style.display = 'none';
  scoreboard.style.display = 'none';
  playerHand.src = ROCK_IMG;
  computerHand.src = ROCK_IMG;
}

function startGame() {
  startMenu.style.display = 'none';
  choicesMenu.style.display = 'flex';
  scoreboard.style.display = 'grid';
}

function showChoices(playerChoice, computerChoice) {
  playerHand.src = `assets/${playerChoice}.png`;
  computerHand.src = `assets/${computerChoice}.png`;
}

function gameOptions() {
  choicesMenu.style.display = 'none';
  optionsMenu.style.display = 'flex';
}

function chooseOption(option) {
  option === 'play-again' ? playAgain() : endGame();
}

function playAgain() {
  choicesMenu.style.display = 'flex';
  optionsMenu.style.display = 'none';
}

function endGame() {
  loadGame();
}

//! logic
function playerChose(playerChoice) {
  const computerChoice = computerChose();
  const winner = compareChoices(playerChoice, computerChoice);

  showChoices(playerChoice, computerChoice);
  updateScores(winner);
  gameOptions();
}

function computerChose() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function compareChoices(playerChoice, computerChoice) {
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
      console.log('tie');
      break;

    case 'player':
      game.playerEarnPoints();
      playerScore.textContent = game.playerScore;
      break;

    case 'computer':
      game.computerEarnPoints();
      computerScore.textContent = game.computerScore;
      break;
  }
}
