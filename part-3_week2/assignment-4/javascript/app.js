// button animation
const label = document.querySelector("label");
const menuButton = document.querySelector(".menu-btn");
const greeting = document.querySelector(".greeting");
const revealButton = document.querySelector(".reveal");
const hiddenData = document.querySelector(".content-box2");

function openSideBar() {
  if (menuButton.matches(".open")) {
    menuButton.classList.remove("open");
    label.style.position = "absolute";
  } else {
    menuButton.classList.add("open");
    label.style.position = "fixed";
  }
}
function changeText() {
  greeting.innerHTML = `<h1>Have a good time!</h1>`;
}
function revealData() {
  hiddenData.removeAttribute("style");
}

label.addEventListener("click", openSideBar);
greeting.addEventListener("click", changeText);
revealButton.addEventListener("click", revealData);
