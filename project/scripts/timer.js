const timerDisplay = document.getElementById('timerDisplay');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const workDurationInput = document.getElementById('workDuration');
const circle = document.querySelector('.circle');

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
    circle.style.background = 'linear-gradient(135deg, #ff5e62, #ff9966)';
  } else {
    timerDisplay.style.color = '';
    secondsDisplay.style.color = '';
    circle.style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
  }
}

let isAnimating = false;

startButton.addEventListener('click', () => {
  if (!isRunning) {
    circle.style.animation = 'none';
    circle.style.transition = 'none';
    circle.style.width = '0';
    circle.style.height = '0';
    void circle.offsetWidth; 
    
    if (timeLeft === 25 * 60) {
      const minutes = parseInt(workDurationInput.value) || 25;
      timeLeft = minutes * 60;
    }
    
    isRunning = true;
    isAnimating = true;    
    circle.style.animation = '';
    circle.style.transition = '';
    circle.classList.add('pulse');

    timerInterval = setInterval(() => {
      timeLeft--;
      updateDisplay();
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = 0;
        updateDisplay();
        stopPulseAnimation();
        alert('¡Tiempo terminado!');
      }
    }, 1000);
  }
});

function stopPulseAnimation() {
  if (!isAnimating) return;
  
  const computedStyle = getComputedStyle(circle);
  const currentWidth = computedStyle.width;
  const currentHeight = computedStyle.height;
  
  circle.style.animation = 'none';
  circle.classList.remove('pulse');
  circle.style.transition = 'width 0.5s ease-out, height 0.5s ease-out, box-shadow 0.5s ease-out';
  circle.style.width = currentWidth;
  circle.style.height = currentHeight;
  
  void circle.offsetWidth;
  
  setTimeout(() => {
    circle.style.width = '0';
    circle.style.height = '0';
    circle.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
  }, 10);
  
  const cleanUp = () => {
    circle.style.transition = 'none';
    isAnimating = false;
  };
  circle.addEventListener('transitionend', cleanUp, { once: true });
}

stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  stopPulseAnimation();
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  const minutes = parseInt(workDurationInput.value) || 25;
  timeLeft = minutes * 60;
  updateDisplay();
  stopPulseAnimation();
});

updateDisplay();