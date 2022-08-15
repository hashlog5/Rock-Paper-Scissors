import {} from './utilities.js';
import { game } from './game.js';

const startMenu = document.querySelector('.start-menu');
const playButton = document.querySelector('#play-button');

const optionsMenu = document.querySelector('.options-menu');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const scoreboard = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

optionsMenu.style.display = 'none';
scoreboard.style.display = 'none';
playButton.addEventListener('click', () => console.log('playButton'));
