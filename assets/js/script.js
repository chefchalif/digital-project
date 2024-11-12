// Parallax Effect and Hero Fade-Out
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

    // Hero Fade-Out
    hero.style.opacity = 1 - scrollPosition / 600;
});

// Animated Counter
function animateCounter() {
    const counter = document.getElementById('counter');
    const target = 200;
    let count = 0;

    const counterInterval = setInterval(() => {
        if (count < target) {
            count++;
            counter.innerText = count + '%';
        } else {
            clearInterval(counterInterval);
        }
    }, 10);
}

// Trigger Counter Animation on Scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('scroll', function() {
    const counterSection = document.querySelector('.ai-integration');
    if (isElementInViewport(counterSection)) {
        animateCounter();
        // Remove the event listener after animation starts
        window.removeEventListener('scroll', arguments.callee);
    }
});

// Carousel Functionality
// Simple horizontal scroll carousel
const carousel = document.querySelector('.solutions-carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});
