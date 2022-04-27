function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
const bodyColor = document.querySelector("body")


buttonEl.addEventListener("click", changeColorHandle);

function changeColorHandle(event) { 
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanEl.textContent = color;

}
