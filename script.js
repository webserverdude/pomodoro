const alarmSound = new Audio('alarm.mp3');
alarmSound.preload = "auto";

let timerDuration = 25 * 60;
let timeLeft = timerDuration;
let timer;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alarmSound.play();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = timerDuration;
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", updateDisplay);
