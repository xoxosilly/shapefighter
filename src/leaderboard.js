export class Leaderboard {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  }
  submitScore(username, score) {
    this.scores.push({ username, score });
    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(this.scores));
  }
  getTopScores() {
    return this.scores;
  }
}
