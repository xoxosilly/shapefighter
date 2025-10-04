export class Sound {
  constructor() {
    this.enabled = true;
  }
  play(name) {
    if (!this.enabled) return;
    // Stub: real implementation would play an audio file
    console.log("Playing sound:", name);
  }
  setEnabled(val) {
    this.enabled = val;
  }
}
