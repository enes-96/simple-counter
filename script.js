"use strict";
const displayValue = document.querySelector(".value");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");

let counter = 0;

increaseBtn.addEventListener("click", () => {
  counter++;
  displayValue.innerHTML = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  displayValue.innerHTML = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  displayValue.innerHTML = counter;
});
