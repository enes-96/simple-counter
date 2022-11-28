"use strict";
const displayValue = document.querySelector(".value");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");

let counter = 0;

increaseBtn.addEventListener("click", () => {
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

resetBtn.addEventListener("click", () => {
  counter = 0;
  displayValue.innerHTML = counter;
  displayValue.style.color = "black";
});

decreaseBtn.addEventListener("click", () => {
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
