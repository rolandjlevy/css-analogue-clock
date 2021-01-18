const $ = (selector) => document.querySelector(selector);
const setVar = (varName, value) => document.documentElement.style.setProperty(varName, value);
$('.this-year').textContent = new Date().getFullYear();

function setCorrectTime() {
  const seconds = new Date().getSeconds();
  setVar('--delay-seconds', `-${seconds}s`);
  const minutes = new Date().getMinutes();
  setVar('--delay-minutes', `-${minutes * 60 + seconds}s`);
  const hours = new Date().getHours() % 12;
  setVar('--delay-hours', `-${hours * 3600 + (minutes * 60) + seconds}s`);
}

setCorrectTime();