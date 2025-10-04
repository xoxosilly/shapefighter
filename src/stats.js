export class Stats {
  constructor(data = {}) {
    this.data = Object.assign({
      wins: 0,
      coins: 0,
      kills: 0,
      upgrades: 0
    }, data);
  }
  increment(key, amount = 1) {
    if (this.data[key] !== undefined) this.data[key] += amount;
  }
  get(key) {
    return this.data[key];
  }
}
