// JavaScript code to handle the slideshow

// Get references to elements
const slideshow = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Variable to track the current slide index
let slideIndex = 0;

// Function to show the current slide
function showSlide() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[slideIndex].style.display = 'block';
}

// Function to go to the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Function to go to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Event listeners for the previous and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the initial slide
showSlide();





const carousel = document.querySelector('.carousel');
//const slides = carousel.querySelectorAll('.slide');
const playButton = document.getElementById('playButton');

const audioElements = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4'),
  document.getElementById('audio5'),
  document.getElementById('audio6'),
  document.getElementById('audio7'),
  document.getElementById('audio8'),
  document.getElementById('audio9'),
  document.getElementById('audio10'),
  document.getElementById('audio11'),
  document.getElementById('audio12')
];

for (let i = 0; i < slides.length; i++) {
  const cards = slides[i].querySelectorAll('.card');
  for (let j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', () => {
      const audioIndex = i * 3 + j;
      playAudio(audioElements[audioIndex]);
    });
  }
}

function playAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

