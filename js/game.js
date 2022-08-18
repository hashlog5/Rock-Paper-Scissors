export const game = {
  playerPoints: 0,
  computerPoints: 0,

  get playerScore() {
    return this.playerPoints;
  },

  get computerScore() {
    return this.computerPoints;
  },

  resetScores() {
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
