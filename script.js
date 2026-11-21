
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const scene = document.getElementById("scene");
const finalCard = document.getElementById("finalCard");

let isOpened = false;

openButton.addEventListener("click", function () {

  if (isOpened) return;

  isOpened = true;

  // Open the envelope
  envelope.classList.add("open");

  // Hide the button
  openButton.style.opacity = "0";
  openButton.style.pointerEvents = "none";

  // Make the envelope disappear
  setTimeout(function () {
    envelope.classList.add("disappear");
  }, 1500);

  // Hide the first screen
  setTimeout(function () {
    scene.classList.add("finished");
  }, 2200);

  // Show the invitation card
  setTimeout(function () {
    finalCard.classList.add("show");
  }, 2400);

});
