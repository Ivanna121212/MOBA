
const threshold = 50;


const banner = document.getElementById("topBanner");

function showBanner() {
  banner.style.display = "block";
}

function hideBanner() {
  banner.style.display = "none";
}

document.addEventListener("mousemove", function(event) {
  const mouseY = event.clientY;

   if (mouseY <= threshold) {
    showBanner();
  } else {
    hideBanner();
  }
});