import "./style.css";

let clickCount = 0;

const resetButton = document.getElementById(`reset`);
const countElement = document.getElementById(`click-count`);
const decrementButton = document.getElementById(`decrement`);
const incrementButton = document.getElementById(`increment`);

function reset() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function increment() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 10) {
    countElement.style.backgroundColor = "blue";
  }
}
function decrement() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

resetButton.addEventListener("click", reset);
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>

`;
