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
  
  const imageContainer = document.getElementById('image');
  const wordInput = document.getElementById('wordInput');
  const submitBtn = document.getElementById('submitBtn');
  const scoreElement = document.getElementById('score');
  
  let currentImageIndex = 0;
  let score = 0;
  
  function showNextImage() {
    if (currentImageIndex >= images.length) {
      showScore();
      return;
    }
  
    imageContainer.src = images[currentImageIndex];
    wordInput.value = '';
    wordInput.focus();
  }
  
  
  
  function checkWord() {
    const userWord = wordInput.value.trim().toLowerCase();
    const correctWord = words[currentImageIndex].toLowerCase();
  
    if (userWord === correctWord) {
      score += 2;
    }
  
    currentImageIndex++;
    showNextImage();
  }

 console.log(score)
 let result = document.getElementById("score");
 result.textContent = score;
  function showScore() {
    imageContainer.style.display = 'none';
    wordInput.style.display = 'none';
    submitBtn.style.display = 'none';
    scoreElement.textContent = `Загальна кількість балів: ${score}`;
     }

     

  submitBtn.addEventListener('click', checkWord);
  
  showNextImage();

  let successOrNot = document.getElementById('success');
  

   /*function resultSuccess() {  
  if(score < 15){
    successOrNot.textContent = "Треба повторити. Почнімо спочатку"
  } else if (score>=15) {
    successOrNot.textContent = "Вітаю! Ви наблизилися на крок до бонусної гри."
  }
}
resultSuccess();*/

const gameContainer = document.querySelector('.game-container');
const messageContainer = document.getElementById('messageContainer');

function showScore() {
  gameContainer.style.display = 'none'; 
  messageContainer.style.display = 'block'; 

  const messageElement = document.createElement('div');
  messageElement.textContent = (score < 15) ? "Треба повторити. Почнімо спочатку" : "Вітаю! Ви наблизилися на крок до бонусної гри."; 
  messageContainer.appendChild(messageElement);
}