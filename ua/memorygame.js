/*const container = document.querySelector(".game-container");
const images = [
  "../img/food/bread.png",
  "../img/food/tomato.png",
  "../img/food/cucumber.png",
  "../img/food/butter.png",
  "../img/food/salt.png",
  "../img/food/sugar.png",
  "../img/food/water.png",
  "../img/food/tea.png",
  "../img/food/coffee.png",
  "../img/food/meat.png",
  "../img/food/fish.png",
  "../img/food/cheese.png",
];

const words = [
  "хліб",
  "помідор",
  "огірок",
  "масло",
  "сіль",
  "цукор",
  "вода",
  "чай",
  "кава",
  "м'ясо",
  "риба",
  "сир",
];

const pictures = document.querySelectorAll('.cardword');
const picturessArray = [...pictures];
const words = document.querySelectorAll('.wordword');
const wordsArray = [...words];


const pickList = [...words, ...images]

const totalNumber = pickList.length;
let correctGuess = 0;
let activeCard = null;
let awaitngEndOfMove = false;

function buildCard (card){
  const element = document.createElement("div");
  element.classList.add("cards");
  element.setAttribute("data-card", card);
  element.addEventListener("click",()=>{
    if(awaitngEndOfMove){
      return;
    }
  })
  return element;
}

for (i=0; i< totalNumber; i++){
    const randomIndex = Math.floor (Math.random()* totalNumber);
    const card = pickList[randomIndex];
    const cards = buildCard(card);
    pickList.splice(randomIndex,1);
    container.appendChild(cards);
    console.log(card);
}*/


 const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let [firstCard, ], secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));