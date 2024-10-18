'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

const header = select(".top-bar");
const heroBanner = select(".hero-banner");
const heroBannerHeight = heroBanner.offsetHeight;

listen("scroll", window, () => {
  const trigger = window.scrollY;

  if (trigger > heroBannerHeight) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});




/*

modeSwitch.addEventListener('click', function() {
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        themeToggleButton.innerText = 'Switch to Light Mode';
    } else {
        themeToggleButton.innerText = 'Switch to Night Mode';
    }
});

document.getElementById('shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this website!',
            text: 'Here is an awesome website I found.',
            url: window.location.href,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Share not supported on this browser, please copy the URL.');
    }
}); */