"use strict";
const displayValue = document.querySelector(".value");

let counter = 0;

const increaseBtn = document
  .querySelector(".increase")
  .addEventListener("click", () => {
    counter++;
    displayValue.innerHTML = counter;
    if (counter < 0) {
      displayValue.style.color = "red";
    } else if (counter > 0) {
      displayValue.style.color = "blue";
    } else {
      displayValue.style.color = "black";
    }
  });

const resetBtn = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    counter = 0;
    displayValue.innerHTML = counter;
    displayValue.style.color = "black";
  });

const decreaseBtn = document
  .querySelector(".decrease")
  .addEventListener("click", () => {
    counter--;
    displayValue.innerHTML = counter;
    if (counter < 0) {
      displayValue.style.color = "red";
    } else if (counter > 0) {
      displayValue.style.color = "blue";
    } else {
      displayValue.style.color = "black";
    }
  });
