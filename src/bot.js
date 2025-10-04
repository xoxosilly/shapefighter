import { Weapon } from './weapon.js';

const shapes = ["circle", "square", "triangle"];
const weapons = [
  { name: "Baseball Bat", damage: 5 },
  { name: "Stick", damage: 3 },
  { name: "Sword", damage: 8 }
];

export class Bot {
  constructor() {
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
    this.hp = 40 + Math.floor(Math.random() * 20);
    this.maxHp = this.hp;
    const w = weapons[Math.floor(Math.random() * weapons.length)];
    this.weapon = new Weapon(w.name, w.damage);
    this.reward = 5 + Math.floor(Math.random() * 10); // coins dropped
    this.side = "bot"; // Could expand to teams later
  }

  attack(target) {
    target.hp -= this.weapon.damage;
  }

  draw(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = "#f95";
    if (this.shape === "circle") {
      ctx.beginPath();
      ctx.arc(x, y, 35, 0, 2 * Math.PI);
      ctx.fill();
    } else if (this.shape === "square") {
      ctx.fillRect(x - 35, y - 35, 70, 70);
    } else if (this.shape === "triangle") {
      ctx.beginPath();
      ctx.moveTo(x, y - 45);
      ctx.lineTo(x - 35, y + 35);
      ctx.lineTo(x + 35, y + 35);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // Draw HP bar
    ctx.fillStyle = "#fff";
    ctx.fillRect(x - 35, y + 40, 70, 8);
    ctx.fillStyle = "#f00";
    ctx.fillRect(x - 35, y + 40, 70 * (this.hp / this.maxHp), 8);
  }
}
