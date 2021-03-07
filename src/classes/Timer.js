export default class Timer {
  constructor() {
    this.elements = {
      buttons: {
        increase: document.getElementById('add-minutes'),
        decrease: document.getElementById('remove-minutes'),
        toggleStart: document.getElementById('timer-start'),
      },
      timer: {
        minutes: document.getElementById('timer-minutes'),
        seconds: document.getElementById('timer-seconds'),
      },
      complication: document.getElementById('complication-timer'),
    };

    this.timerInSeconds = 25 * 60;
    this.isActive = false;
    this.interval = null;
  }

  renderTimeOnDisplay() {
    const minutes = Math.floor(this.timerInSeconds / 60);
    const seconds = String(Math.floor(this.timerInSeconds % 60)).padStart(
      2,
      '0',
    );
    this.elements.timer.minutes.innerText = minutes;
    this.elements.timer.seconds.innerText = seconds;
    this.elements.complication.innerText = `${minutes}: ${seconds}`;
  }

  renderButton() {
    this.elements.buttons.toggleStart.innerText = this.isActive
      ? 'stop'
      : 'start';
  }

  increase() {
    if (this.timerInSeconds >= 60 * 60) {
      return;
    }
    this.timerInSeconds += 5 * 60;
    this.renderTimeOnDisplay();
  }

  decrease() {
    if (this.timerInSeconds <= 0) {
      return;
    }
    this.timerInSeconds -= 5 * 60;
    this.renderTimeOnDisplay();
  }

  start() {
    this.interval = setInterval(() => {
      if (this.timerInSeconds > 0) {
        this.elements.buttons.increase.innerText = ' ';
        this.elements.buttons.decrease.innerText = ' ';
        this.timerInSeconds--;
        this.renderTimeOnDisplay();
        this.isActive = true;
        this.renderButton();
      }
    }, 1000);
  }

  stop() {
    this.elements.buttons.increase.innerText = '+';
    this.elements.buttons.decrease.innerText = '-';
    clearInterval(this.interval);
    this.isActive = false;
    this.renderButton();
  }

  reset() {}

  execute() {
    this.renderTimeOnDisplay();
    this.renderButton();
    this.elements.buttons.increase.onclick = () => this.increase();
    this.elements.buttons.decrease.onclick = () => this.decrease();
    this.elements.buttons.toggleStart.onclick = () => {
      !this.isActive ? this.start() : this.stop();
    };
  }
}