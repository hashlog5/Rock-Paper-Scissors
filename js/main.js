import { game } from './game.js';

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
  startMenu.style.display = 'flex';
  choicesMenu.style.display = 'none';
  optionsMenu.style.display = 'none';
  scoreboard.style.display = 'none';
}

function startGame() {
  startMenu.style.display = 'none';
  choicesMenu.style.display = 'flex';
  scoreboard.style.display = 'grid';
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
      
      console.log(
        `player wins | playerScore: ${game.playerScore} | computerScore: ${game.computerScore}`
      );
      break;

    case 'computer':
      game.computerEarnPoints();

      console.log(
        `computer wins | playerScore: ${game.playerScore} | computerScore: ${game.computerScore}`
      );
      break;
  }
}
