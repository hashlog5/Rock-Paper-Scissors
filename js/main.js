import { game } from './game.js';
import {
  resetGameDisplay,
  showFists,
  resetWinnerStatus,
  playGame,
  disableButtons,
  enableButtons,
  shakeHands,
  showChoices,
  setPlayerAsWinner,
  setComputerAsWinner,
  updatePlayerScore,
  updateComputerScore,
  setChoiceColor,
  removeChoiceColor,
} from './utilities.js';

//! UI: game buttons
const play = document.querySelector('#play');
const choices = document.querySelectorAll('.choices i');
const quit = document.querySelector('#quit');

//! logic
const resetGame = () => {
  resetGameDisplay();
  game.resetScores();
};

const playerChose = (choice, playerChoice) => {
  const computerChoice = computerChose();
  const winner = chooseWinner(playerChoice, computerChoice);

  showFists();
  resetWinnerStatus();
  disableButtons();
  setTimeout(shakeHands, 250);

  setTimeout(() => {
    showChoices(playerChoice, computerChoice);
    updateScores(winner);
  }, 1750);

  setTimeout(() => {
    removeChoiceColor(choice);
    enableButtons();
  }, 2000);
};

const computerChose = () => {
  const computerChoose = game.choices;
  const randomChoice = Math.floor(Math.random() * 3);

  return computerChoose[randomChoice];
};

const chooseWinner = (playerChoice, computerChoice) => {
  const [rock, paper, scissors] = game.choices;
  const [player, computer, tie] = game.winnerSelection;
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
};

const updateScores = (winner) => {
  const [playerWins, computerWins] = game.winnerSelection;

  switch (winner) {
    default:
      break;

    case playerWins:
      game.playerEarnPoints();
      setPlayerAsWinner();
      updatePlayerScore(game.playerScore);
      break;

    case computerWins:
      game.computerEarnPoints();
      setComputerAsWinner();
      updateComputerScore(game.computerScore);
      break;
  }
};

//! app
resetGame();

//! events
play.addEventListener('click', playGame);

choices.forEach((choice) =>
  choice.addEventListener('click', () => {
    setChoiceColor(choice);
    playerChose(choice, choice.id);
  })
);

quit.addEventListener('click', resetGame);
