export class Quests {
  constructor(data = {}) {
    this.active = data.active || [
      { id: 1, description: "Defeat 5 bots", completed: false, progress: 0, goal: 5 }
    ];
  }
  progress(id) {
    const quest = this.active.find(q => q.id === id);
    if (quest && !quest.completed) {
      quest.progress += 1;
      if (quest.progress >= quest.goal) quest.completed = true;
    }
  }
  getActive() {
    return this.active;
  }
}
