
document.addEventListener('DOMContentLoaded', () => {
  setClockArms();
});

function setClockArms() {
  const secondsArm = document.querySelector('.arm.seconds');
  const seconds = new Date().getSeconds();
  const degSeconds = seconds * 6;
  document.documentElement.style.setProperty('--delay-seconds', `-${seconds}s`);

  // const minutesArm = document.querySelector('.arm.minutes');
  // const minutes = new Date().getMinutes();
  // const degMinutes = minutes * 6;
  // minutesArm.style.transform = `rotate(${degMinutes}deg)`;

}