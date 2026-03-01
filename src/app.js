import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('.card').classList.add(generateRandomSuit());
  document.querySelector('.card').innerHTML = generateRandomNum();
};

let generateRandomNum = () => {
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers]
};

let generateRandomSuit = () => {
  let suit = ['diamonds', 'spades', 'hearts', 'clubs'];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit]
};

document.querySelector('.btn-timer').addEventListener('click', () => {
  setTimeout(() => {
    location.reload()
  }, 10000);
});

document.querySelector(".width").addEventListener("keydown", function (event) {
  let card = document.querySelector('.card');
  if (event.key === "Enter") {
    let newWidth = event.target.value;
    card.style.width = newWidth + 'px';
  }
});

document.querySelector(".height").addEventListener("keydown", function (event) {
  let card = document.querySelector('.card');
  if (event.key === "Enter") {
    let newHeight = event.target.value;
    card.style.height = newHeight + 'px';
  }
});
