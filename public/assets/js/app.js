const timerElement = document.querySelector('#timer');
let timeRemaining = 10 * 60;

function startCountdown() {
    const countdown = setInterval(() => {
        timeRemaining--;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

startCountdown();



let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 3;
    } else {
        currentIndex = index;
    }
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optionally, you could set an interval to auto-slide
setInterval(nextSlide, 3000);


document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
});