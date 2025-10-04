export class Shop {
  constructor(stock) {
    this.stock = stock || [
      { name: "Sword", type: "weapon", price: 30, damage: 8 },
      { name: "Axe", type: "weapon", price: 50, damage: 12 },
      { name: "Triangle", type: "shape", price: 100, hp: 70 },
      { name: "Health Potion", type: "powerup", price: 10 }
    ];
  }
  getItems() {
    return this.stock;
  }
  buy(player, itemName) {
    const item = this.stock.find(i => i.name === itemName);
    if (item && player.coins >= item.price) {
      player.coins -= item.price;
      player.inventory.addItem(item);
      return true;
    }
    return false;
  }
}
