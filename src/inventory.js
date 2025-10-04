export class Inventory {
  constructor(items = []) {
    this.items = items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(itemName) {
    this.items = this.items.filter(i => i.name !== itemName);
  }
  getItems() {
    return this.items;
  }
  equipWeapon(name) {
    return this.items.find(i => i.type === "weapon" && i.name === name) || null;
  }
}
