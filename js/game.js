export const game = {
  playerPoints: 0,
  computerPoints: 0,

  hands: ['rock', 'paper', 'scissors'],
  winningOutcomes: ['player', 'computer', 'tie'],

  get playerScore() {
    return this.playerPoints;
  },

  get computerScore() {
    return this.computerPoints;
  },

  get choices() {
    return this.hands;
  },

  get winnerSelection() {
    return this.winningOutcomes;
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
