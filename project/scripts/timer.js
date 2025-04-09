const timerDisplay = document.getElementById('timerDisplay');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const workDurationInput = document.getElementById('workDuration');

let timerInterval;
let timeLeft = 25 * 60;
let isRunning = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  
  if (timeLeft <= 60) {
    timerDisplay.style.color = 'red';
    secondsDisplay.style.color = 'red';
  } else {
    timerDisplay.style.color = '';
    secondsDisplay.style.color = '';
  }
}

startButton.addEventListener('click', () => {
  if (!isRunning) {

    if (timeLeft === 25 * 60) {
      const minutes = parseInt(workDurationInput.value) || 25;
      timeLeft = minutes * 60;
    }
    
    isRunning = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateDisplay();
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = 0;
        updateDisplay();
        alert('¡Tiempo terminado!');
      }
    }, 1000);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  const minutes = parseInt(workDurationInput.value) || 25;
  timeLeft = minutes * 60;
  updateDisplay();
});

updateDisplay();