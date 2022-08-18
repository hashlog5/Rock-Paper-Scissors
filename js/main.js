import { game } from './game.js';
import {
  resetGameDisplay,
  showFists,
  resetWinnerStatus,
  playGame,
  disableButtons,
  enableButtons,
  animateHands,
  showChoices,
  setPlayerAsWinner,
  setComputerAsWinner,
  updatePlayerScore,
  updateComputerScore,
  setChoiceColor,
  removeChoiceColor,
} from './utilities.js';

//! UI: buttons
const play = document.querySelector('#play');
const choices = document.querySelectorAll('.choices i');
const quit = document.querySelector('#quit');

//! app
resetGame();

function resetGame() {
  resetGameDisplay();
  showFists();
  resetWinnerStatus();
  game.resetScores();
}

//! logic
function playerChose(choice, playerChoice) {
  const computerChoice = computerChose();
  const winner = chooseWinner(playerChoice, computerChoice);

  showFists();
  resetWinnerStatus();
  disableButtons();
  setTimeout(animateHands, 250);

  setTimeout(() => {
    showChoices(playerChoice, computerChoice);
    updateScores(winner);
  }, 1750);

  setTimeout(() => {
    removeChoiceColor(choice);
    enableButtons();
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
      updatePlayerScore(game.playerScore);
      break;

    case 'computer':
      game.computerEarnPoints();
      setComputerAsWinner();
      updateComputerScore(game.computerScore);
      break;
  }
}

//! events
play.addEventListener('click', playGame);

choices.forEach((choice) =>
  choice.addEventListener('click', () => {
    setChoiceColor(choice);
    playerChose(choice, choice.id);
  })
);

quit.addEventListener('click', resetGame);
