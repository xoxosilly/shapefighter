import { Player } from './player.js';
import { Bot } from './bot.js';
import { savePlayerData, loadPlayerData } from './storage.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = new Player(loadPlayerData() || {});
let bots = [];
let coins = player.coins;

function spawnBots(num) {
  bots = [];
  for (let i = 0; i < num; i++) {
    bots.push(new Bot());
  }
}
spawnBots(3);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx, 400, 500);

  bots.forEach((bot, i) => {
    bot.draw(ctx, 200 + i * 200, 200);
  });

  // UI info
  document.getElementById('info').textContent =
    `HP: ${player.hp} | Weapon: ${player.weapon.name} | Coins: ${coins} | Shape: ${player.shape}`;
}

function update() {
  // Bots attack player randomly
  bots.forEach(bot => {
    if (bot.hp > 0 && Math.random() < 0.01) {
      bot.attack(player);
    }
  });

  // Remove dead bots, reward coins
  bots = bots.filter(bot => {
    if (bot.hp <= 0) {
      coins += bot.reward;
      return false;
    }
    return true;
  });

  // Respawn bots if all dead
  if (bots.length === 0) {
    spawnBots(3);
  }

  player.coins = coins;
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'a') {
    // Attack nearest bot
    const target = bots.find(bot => bot.hp > 0);
    if (target) {
      player.attack(target);
    }
  }
});

document.getElementById('saveBtn').onclick = () => {
  savePlayerData(player);
  alert('Progress saved!');
};

document.getElementById('loadBtn').onclick = () => {
  const data = loadPlayerData();
  if (data) {
    player = new Player(data);
    coins = player.coins;
    alert('Progress loaded!');
  } else {
    alert('No saved progress found.');
  }
};

gameLoop();
