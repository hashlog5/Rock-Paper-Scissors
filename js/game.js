export const game = {
  gameStarted: false,
  playerPoints: 0,
  computerPoints: 0,

  get status() {
    return this.gameStarted;
  },

  get playerScore() {
    return this.playerPoints;
  },

  get computerScore() {
    return this.computerPoints;
  },

  reset() {
    this.gameStarted = false;
    this.playerPoints = 0;
    this.computerPoints = 0;
  },

  playerEarnPoints() {
    this.playerPoints++;
  },

  computerEarnPoints() {
    this.computerPoints++;
  },
};
