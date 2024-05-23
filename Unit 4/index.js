//Variable and Data types

var x = 25; // This is not widely used but due hoisting property of the var.

let y = 20;

z = "Samridhha";

const name = "Aayusha";

const add = () => {
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let result = document.getElementById("result");
  console.log("This is working.");
  let val = parseInt(first.value) + parseInt(last.value);

  result.innerText = val;
};
