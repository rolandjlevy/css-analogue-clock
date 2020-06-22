document.addEventListener('DOMContentLoaded', () => {
  initClockArms();
  setCorrectTime();
  // initButtons();
});

function initClockArms() {
  initArm('.arm.seconds');
  initArm('.arm.minutes');
  initArm('.arm.hours');
}

function initArm (className) {
  const arm = document.querySelector(className);
  const transition = 'all 0.3s ease';
  arm.classList.add('animate');
  arm.style.opacity = 1;
  arm.style.transition = transition;
}

function setCorrectTime() {
  const seconds = new Date().getSeconds();
  document.documentElement.style.setProperty('--delay-seconds', `-${seconds}s`);
  const minutes = new Date().getMinutes();
  document.documentElement.style.setProperty('--delay-minutes', `-${minutes * 60 + seconds}s`);
  const hours = new Date().getHours() % 12;
  document.documentElement.style.setProperty('--delay-hours', `-${hours * 3600 + (minutes * 60) + seconds}s`);
}

function resetTimer() {
  document.documentElement.style.setProperty('--delay-seconds', 0);
  document.documentElement.style.setProperty('--delay-minutes', 0);
  document.documentElement.style.setProperty('--delay-hours', 0);
}

function initButtons() {
  const timeBtn = document.querySelector('.btn.time');
  timeBtn.addEventListener('click', (e) => {
    setCorrectTime();
  });
  const resetBtn = document.querySelector('.btn.reset');
  resetBtn.addEventListener('click', (e) => {
    resetTimer();
  });
}