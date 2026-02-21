document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const lotteryNumbersDiv = document.getElementById('lottery-numbers');

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