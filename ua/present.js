const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const playButton = document.getElementById('playButton');

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');

card1.addEventListener('click', () => {
  playAudio(audio1);
});

card2.addEventListener('click', () => {
  playAudio(audio2);
});

card3.addEventListener('click', () => {
  playAudio(audio3);
});

function playAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
