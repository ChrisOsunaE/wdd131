// currentyear
const currentyear = document.getElementById('currentyear');
currentyear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.documentElement.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }
  
  darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});