export class Skins {
  constructor(unlocked = ["default"]) {
    this.unlocked = unlocked;
    this.selected = "default";
  }
  unlock(name) {
    if (!this.unlocked.includes(name)) this.unlocked.push(name);
  }
  select(name) {
    if (this.unlocked.includes(name)) this.selected = name;
  }
  getSelected() {
    return this.selected;
  }
  getUnlocked() {
    return this.unlocked;
  }
}
