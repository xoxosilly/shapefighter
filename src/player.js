import { Weapon } from './weapon.js';

export class Player {
  constructor(data) {
    this.shape = data.shape || "circle";
    this.hp = data.hp || 50;
    this.maxHp = 50;
    this.weapon = data.weapon ? new Weapon(data.weapon.name, data.weapon.damage) : new Weapon("Baseball Bat", 5);
    this.coins = data.coins || 0;
    this.level = data.level || 1;
  }

  attack(target) {
    target.hp -= this.weapon.damage;
  }

  upgradeShape() {
    // Example: upgrade logic (expand as needed)
    if (this.level < 5) {
      this.level++;
      this.maxHp += 10;
      this.hp = this.maxHp;
    } else {
      // Allow changing shape after max level
      this.shape = this.shape === "circle" ? "square" : "triangle";
      this.maxHp = 70;
      this.hp = this.maxHp;
      this.level = 1;
    }
  }

  buyWeapon(name, damage, cost) {
    if (this.coins >= cost) {
      this.weapon = new Weapon(name, damage);
      this.coins -= cost;
    }
  }

  draw(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = "#49f";
    if (this.shape === "circle") {
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, 2 * Math.PI);
      ctx.fill();
    } else if (this.shape === "square") {
      ctx.fillRect(x - 40, y - 40, 80, 80);
    } else if (this.shape === "triangle") {
      ctx.beginPath();
      ctx.moveTo(x, y - 50);
      ctx.lineTo(x - 40, y + 40);
      ctx.lineTo(x + 40, y + 40);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // Draw HP bar
    ctx.fillStyle = "#fff";
    ctx.fillRect(x - 40, y + 50, 80, 10);
    ctx.fillStyle = "#0f0";
    ctx.fillRect(x - 40, y + 50, 80 * (this.hp / this.maxHp), 10);
  }
}
