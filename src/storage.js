export function savePlayerData(player) {
  const data = {
    shape: player.shape,
    hp: player.hp,
    maxHp: player.maxHp,
    weapon: { name: player.weapon.name, damage: player.weapon.damage },
    coins: player.coins,
    level: player.level
  };
  localStorage.setItem('playerData', JSON.stringify(data));
}

export function loadPlayerData() {
  const data = localStorage.getItem('playerData');
  return data ? JSON.parse(data) : null;
}
