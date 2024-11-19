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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Line Drawing Animation</title>
    <style>
        svg {
            width: 100%;
            height: 200px;
        }

        .line {
            fill: none;
            stroke: #3498db;
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 0, 1000;  /* Length of the line (arbitrary large value) 
            animation: drawLine 3s ease-out forwards;
        }

        @keyframes drawLine {
            to {
                stroke-dasharray: 1000, 0;  /* Animate stroke-dasharray to 0, which 'draws' the line 
            }
        }
    </style>
</head>
<body>

    <svg viewBox="0 0 500 200">
        <path class="line" d="M10,150 Q150,50 300,150 T490,150" />
    </svg>

</body>
</html>


*/
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