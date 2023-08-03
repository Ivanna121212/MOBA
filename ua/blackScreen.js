
const popup = document.getElementById("popupWindow1");
const openButton = document.getElementById("button1");
const closeButton = document.getElementById("finish");


function openPopup() {
  popup.style.display = "block";
}
function closePopup() {
  popup.style.display = "none";
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
