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

  playerEarnPoints() {
    this.playerScoreCounter++;
  },

  computerEarnPoints() {
    this.computerScoreCounter++;
  },
};
