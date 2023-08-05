
const slideshow = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');


let slideIndex = 0;

function showSlide() {
  
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  
  slides[slideIndex].style.display = 'block';
}


function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide();





const carousel = document.querySelector('.carousel');

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

