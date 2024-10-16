'use strict';
const heroBanner = document.querySelector('.hero-banner');
const fixedHeader = document.querySelector('nav');

window.addEventListener('scroll', function() {

let heroBottom = heroBanner.offsetTop + heroBanner.offsetHeight;

if (window.scrollY > heroBottom) {
    fixedHeader.style.display = 'block';
} else {
    fixedHeader.style.display = 'hidden';
}
});


modeSwitch.addEventListener('click', function() {
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        themeToggleButton.innerText = 'Switch to Light Mode';
    } else {
        themeToggleButton.innerText = 'Switch to Night Mode';
    }
});

