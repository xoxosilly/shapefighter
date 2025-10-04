export class Profile {
  constructor(username = "Player") {
    this.username = username;
    this.slots = JSON.parse(localStorage.getItem("profiles") || "[]");
  }
  saveSlot(slot, data) {
    this.slots[slot] = Object.assign({ username: this.username }, data);
    localStorage.setItem("profiles", JSON.stringify(this.slots));
  }
  loadSlot(slot) {
    return this.slots[slot] || null;
  }
  getAll() {
    return this.slots;
  }
}
