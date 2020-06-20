
document.addEventListener('DOMContentLoaded', () => {
  setClockArms();
});

function setClockArms() {
  const transition = 'all 0.3s ease';
  
  initArm ('.arm.seconds', transition);
  const seconds = new Date().getSeconds();
  document.documentElement.style.setProperty('--delay-seconds', `-${seconds}s`);

  initArm ('.arm.minutes', transition);
  const minutes = new Date().getMinutes();
  document.documentElement.style.setProperty('--delay-minutes', `-${minutes * 60 + seconds}s`);

  initArm ('.arm.hours', transition);
  const hours = new Date().getHours() % 12;
  document.documentElement.style.setProperty('--delay-hours', `-${hours * 3600 + (minutes * 60) + seconds}s`);
}

function initArm (className, transition) {
  const arm = document.querySelector(className);
  arm.style.opacity = 1;
  arm.style.transition = transition;
}