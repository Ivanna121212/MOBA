
const couples = [
    { word: 'ОГІРОК', picture: '../img/food/cucumber.png' },
    { word: 'ПОМІДОР', picture: '../img/food/tomato.png' },
    { word: 'ХЛІБ', picture: '../img/food/bread.png' },
    { word: 'ОГІРОК', picture: '../img/food/cucumber.png' },
    { word: 'ПОМІДОР', picture: '../img/food/tomato.png' },
    { word: 'ХЛІБ', picture: '../img/food/bread.png' },
    { word: 'ОГІРОК', picture: '../img/food/cucumber.png' },
    { word: 'ПОМІДОР', picture: '../img/food/tomato.png' },
    { word: 'ХЛІБ', picture: '../img/food/bread.png' },
    { word: 'ОГІРОК', picture: '../img/food/cucumber.png' },
    { word: 'ПОМІДОР', picture: '../img/food/tomato.png' },
    { word: 'ХЛІБ', picture: '../img/food/bread.png' },
    
  ];

  const cards = document.querySelectorAll('.card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
  
  const cards = [...couples, ...couples];
  
 
  shuffleArray(cards);
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  const memoryGame = document.querySelector('.memory-game');
  
 
  cards.forEach((couple) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
   
    const wordElement = document.createElement('div');
    const pictureElement = document.createElement('img');
  
    wordElement.classList.add('word');
    wordElement.textContent = couple.word;
  
    pictureElement.classList.add('picture');
    pictureElement.src = couple.picture;
    pictureElement.alt = couple.word;
  
    card.appendChild(wordElement);
    card.appendChild(pictureElement);
  
    memoryGame.appendChild(card);
  
   
    card.addEventListener('click', () => handleCardClick(card));
  });
  
  
  