import "./style.css";

let clickCount = 0;

const greetingElement = document.getElementById(`greeting`);
const button = document.getElementById(`change-greeting`);
const resetButton = document.getElementById(`reset`);
const countElement = document.getElementById(`click-count`);
const userInput = prompt("Enter your greeting");

function resetGreeting() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function updateGreeting() {
  clickCount++;
  greetingElement.textContent = `Hello, Browser JavaScript!`;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 5) {
    greetingElement.style.color = "blue";
  }
}

resetButton.addEventListener("click", resetGreeting);
button.addEventListener("click", updateGreeting);

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>

`;
