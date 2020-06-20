
document.addEventListener('DOMContentLoaded', () => {
  setClockArms();
});

function setClockArms() {
  const transition = 'all 0.3s ease'
  
  const secondsArm = document.querySelector('.arm.seconds');
  secondsArm.style.opacity = 1;
  secondsArm.style.transition = transition;
  const seconds = new Date().getSeconds();
  document.documentElement.style.setProperty('--delay-seconds', `-${seconds}s`);

  const minutesArm = document.querySelector('.arm.minutes');
  minutesArm.style.opacity = 1;
  minutesArm.style.transition = transition;
  const minutes = new Date().getMinutes();
  document.documentElement.style.setProperty('--delay-minutes', `-${minutes * 60 + seconds}s`);
}