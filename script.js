
document.addEventListener('DOMContentLoaded', () => {
  setClockArms();
});

function setClockArms() {
  const secondsArm = document.querySelector('.arm.seconds');
  const seconds = new Date().getSeconds();
  secondsArm.style.opacity = 1;
  secondsArm.style.transition = 'all 0.3s ease';
  document.documentElement.style.setProperty('--delay-seconds', `-${seconds}s`);

  const minutesArm = document.querySelector('.arm.minutes');
  minutesArm.style.opacity = 1;
  minutesArm.style.transition = 'all 0.3s ease';
 
  const minutes = new Date().getMinutes();
  document.documentElement.style.setProperty('--delay-minutes', `-${minutes * 60}s`);
  console.log(minutes * 60)

}