let flippedPicture = null;

function handleClick(element) {
  if (element.classList.contains('cardword')) {
    
    if (!element.classList.contains('matched')) {
      element.style.visibility = 'hidden'; 
       flippedPicture = element;
    }
  } else if (element.classList.contains('wordword')) {

    if (!element.classList.contains('matched') && flippedPicture) {
       const pictureId = flippedPicture.dataset.id;
       
      const wordId = element.getAttribute('word-id');
      if (pictureId === wordId) {
        
        element.style.visibility = 'hidden'; 

        flippedPicture.style.visibility = 'hidden'; 
          flippedPicture.classList.add('matched');
        element.classList.add('matched');
        flippedPicture = null; 
      } else {
        
        setTimeout(() => {
          flippedPicture.style.visibility = 'visible'; 
          flippedPicture = null; 
        }, 1000);
        element.style.visibility = 'visible'; 
      }
    }
  }
}

const cardWords = document.querySelectorAll('.cardword, .wordword');
cardWords.forEach((element) => {
  element.addEventListener('click', () => handleClick(element));
});
