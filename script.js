const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
  timeDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", function () {
  if (!timer) {
    timer = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
});

pauseBtn.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = undefined;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});
