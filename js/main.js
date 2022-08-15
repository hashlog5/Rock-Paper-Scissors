import { loadGame, startGame, play } from './utilities.js';
import { game } from './game.js';

const playButton = document.querySelector('#play-button');
const choices = document.querySelectorAll('.choices i');

playButton.addEventListener('click', startGame);
choices.forEach((choice) => choice.addEventListener('click', play));

loadGame();
