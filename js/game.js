export const game = {
  gameStarted: false,
  playerScoreCounter: 0,
  computerScoreCounter: 0,

  get status() {
    return this.gameStarted;
  },

  get playerScore() {
    return this.playerScoreCounter;
  },

  get computerScore() {
    return this.computerScoreCounter;
  },

  reset() {
    this.gameStarted = false;
    this.playerScoreCounter = 0;
    this.computerScoreCounter = 0;
  },

  playerEarnPoints() {
    this.playerScoreCounter++;
  },

  computerEarnPoints() {
    this.computerScoreCounter++;
  },
};
