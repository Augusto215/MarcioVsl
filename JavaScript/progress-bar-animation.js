document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.querySelector('.custom-progress-bar');

  if (progressBar) {
    const finalValue = parseInt(progressBar.getAttribute('aria-valuenow'), 10);
    const finalText = finalValue + '%';

    progressBar.style.width = '0%';
    progressBar.textContent = '0%';

    setTimeout(() => {
      progressBar.style.width = finalValue + '%';

      let currentValue = 0;
      const duration = 2000;
      const intervalTime = 15;
      const increment = finalValue / (duration / intervalTime);

      const intervalId = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          progressBar.textContent = finalText;
          clearInterval(intervalId);
        } else {
          progressBar.textContent = Math.floor(currentValue) + '%';
        }
      }, intervalTime);

    }, 100);
  }
});