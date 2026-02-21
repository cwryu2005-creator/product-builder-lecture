document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const lotteryNumbersDiv = document.getElementById('lottery-numbers');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Theme logic
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
      themeToggleBtn.textContent = '🌙';
    } else {
      themeToggleBtn.textContent = '☀️';
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no theme is set, check system preference
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    themeToggleBtn.textContent = '🌙';
  } else {
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
      themeToggleBtn.textContent = '☀️';
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      themeToggleBtn.textContent = '🌙';
    }
  });

  generateBtn.addEventListener('click', () => {
    const numbers = generateLotteryNumbers();
    lotteryNumbersDiv.innerHTML = ''; // Clear previous numbers
    numbers.forEach(num => {
      const span = document.createElement('span');
      span.classList.add('lottery-number');
      span.textContent = num;
      lotteryNumbersDiv.appendChild(span);
    });
  });

  function generateLotteryNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }
});