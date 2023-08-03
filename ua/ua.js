const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const b1 = document.getElementById("b1");
const girl = document.getElementById("girl");
const boy = document.getElementById("boy");
const start = document.getElementById("start");



/*1.addEventListener('click', function(){
    alert('you');
});
if (start.addEventListener('click') === true){
    if((a2.addEventListener('click') === true && girl.addEventListener('click') === true){
        window.open("https://www.w3schools.com")
    }

};*/

const aButtons = document.querySelectorAll("#a1, #a2, #b1");
aButtons.forEach((button) => {
  button.addEventListener("click", handleAButtonSelect, "test");
});

const genderButtons = document.querySelectorAll("#girl, #boy");
genderButtons.forEach((button) => {
  button.addEventListener("click", handleGenderButtonSelect);
});

const startButton = document.getElementById("start");
startButton.addEventListener("click", handleStartButtonClick);

let selectedAButton = null; // Variable to track the selected "a1" / "a2" / "b1" button
let selectedGenderButton = null; // Variable to track the selected "girl" / "boy" button

// Function to handle button clicks for "a1", "a2", and "b1" buttons
function handleAButtonSelect(event) {
  selectedAButton = event.currentTarget.id;
}

// Function to handle button clicks for "girl" and "boy" buttons
function handleGenderButtonSelect(event) {
  selectedGenderButton = event.currentTarget.id;
}

function handleStartButtonClick() {

  if (selectedAButton && selectedGenderButton) {
    let page;
    if (selectedAButton === "a1" && selectedGenderButton === "girl")
     {
      page = "a1girl.html";
    } else if (selectedAButton === "a2" && selectedGenderButton === "girl")
    {
      page = "a2girl.html";
    } else if (selectedAButton === "b1" && selectedGenderButton === "girl") {
      page = "b1girl.html";
    } else if (selectedAButton === "b1" && selectedGenderButton === "boy") {
      page = "b1boy.html";
    }  else if (selectedAButton === "a2" && selectedGenderButton === "boy") {
        page = "a2boy.html";
      }  else if (selectedAButton === "a1" && selectedGenderButton === "boy") {
        page = "a1boy.html";
      }

    if (page) {
      window.location.href = page;
    }
 } 
 /*else {
   
    alert("Please select one option from each category before clicking Start.");
  }*/
}



