document.addEventListener('DOMContentLoaded', function() {
  const countElement = document.getElementById('count');
  const count = localStorage.getItem('count') || 0;
  countElement.textContent = ` ${count}`;
  
  document.getElementById('back_button').addEventListener('click', function() {
    window.location.href = 'form.html';
  });
});