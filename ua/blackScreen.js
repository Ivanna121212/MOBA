
const popup = document.getElementById("popupWindow1");
const openButton = document.getElementById("button1");
const closeButton = document.getElementById("finish");
const popup2 = document.getElementById("popupWindow2");
const openButton2 = document.getElementById("button2");
const closeButton2 = document.getElementById("finish2");

const popup3 = document.getElementById("popupWindow3");
const openButton3 = document.getElementById("button3");
const closeButton3 = document.getElementById("finish3");
const popup4 = document.getElementById("popupWindow4");
const openButton4 = document.getElementById("button4");
const closeButton4 = document.getElementById("finish4");

/*const popup5 = document.getElementById("popupWindow5");
const openButton5 = document.getElementById("button5");
const closeButton5 = document.getElementById("finish5");
const popup6 = document.getElementById("popupWindow6");
const openButton6 = document.getElementById("button6");
const closeButton6 = document.getElementById("finish6");*/



function openPopup() {
  popup.style.display = "block";
}
function closePopup() {
  popup.style.display = "none";
}

function openPopup2() {
  popup2.style.display = "block";
}
function closePopup2() {
  popup2.style.display = "none";
}

function openPopup3() {
  popup3.style.display = "block";
}
function closePopup3() {
  popup3.style.display = "none";
}

function openPopup4() {
  popup4.style.display = "block";
}
function closePopup4() {
  popup4.style.display = "none";
}

/*function openPopup5() {
  popup5.style.display = "block";
}
function closePopup5() {
  popup5.style.display = "none";
}

function openPopup6() {
  popup6.style.display = "block";
}
function closePopup6() {
  popup6.style.display = "none";
}*/


openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

openButton2.addEventListener("click", openPopup2);
closeButton2.addEventListener("click", closePopup2);

openButton3.addEventListener("click", openPopup3);
closeButton3.addEventListener("click", closePopup3);

openButton4.addEventListener("click", openPopup4);
closeButton4.addEventListener("click", closePopup4);

/*openButton5.addEventListener("click", openPopup5);
closeButton5.addEventListener("click", closePopup5);

openButton4.addEventListener("click", openPopup6);
closeButton4.addEventListener("click", closePopup6);*/
