"use strict";
//Selecting elements
const price = document.getElementById("price");
const people = document.getElementById("people");
const tip = document.getElementById("tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

//Declaring functions
function countBill() {
  const newPrice = price.value;
  const newPeople = people.value;
  const newTip = tip.value;

  const sum =
    (Number(newTip) * Number(newPrice) + Number(newPrice)) / Number(newPeople);
  costInfo.classList.remove("hidden");
  cost.textContent = sum.toFixed(2);
}
const showBill = () => {
  if (price.value === "" || people.value === "" || tip.value === 0) {
    error.textContent = "Fill in all the fields";
    costInfo.classList.add("hidden");
  } else {
    countBill();
    error.textContent = "";
  }
};

countBtn.addEventListener("click", showBill);
