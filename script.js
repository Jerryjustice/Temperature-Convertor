"use strict";

const textbox = document.getElementById("textbox");
const celsius = document.getElementById("tocelsius");
const fahrenheit = document.getElementById("tofahrenheit");
const result = document.getElementById("result");
let temp;

// how to convert celsius to fahrenheit
function convert() {
  if (tofahrenheit.checked) {
    temp = Number(textbox.value);
    temp = (9 / 5) * temp + 32;
    result.textContent = temp;
  }

  // how to convert fahrenheit to  celsius
  else if (tocelsius.checked) {
    temp = Number(textbox.value);
    temp = (5 / 9) * (temp - 32);
    result.textContent = temp;
  }

  // else print out select a unit
  else {
    result.textContent = "Select a Unit";
  }
}
