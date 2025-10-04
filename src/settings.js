export class Settings {
  constructor(data = {}) {
    this.data = Object.assign({
      sound: true,
      music: true,
      difficulty: "normal",
      controls: { attack: "A" }
    }, data);
  }
  set(key, value) {
    this.data[key] = value;
  }
  get(key) {
    return this.data[key];
  }
}
