export class Achievements {
  constructor(data = {}) {
    this.data = data;
  }
  unlock(name) {
    this.data[name] = true;
  }
  isUnlocked(name) {
    return !!this.data[name];
  }
  getAll() {
    return Object.keys(this.data);
  }
}
