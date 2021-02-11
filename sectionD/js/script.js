/*
 * Author: Anna Yu
 * Created: 9 February 2021
 * License: Public Domain
*/

// create div element that has id div_1 and text "this is annoying"
var div_1 = document.createElement("div");
div_1.id = "div_1";
div_1.innerHTML = "<p> this is annoying <br> </p>";
// console.log that text
console.log(div_1);
// add a button
var btn = document.createElement("button");
btn.id = "button";
btn.innerHTML = "press!";

document.body.appendChild(div_1);
document.body.appendChild(btn);

// change the text to "this is more annoyiing than i thought!" when button clicked
document.getElementById("button").onclick = function () {
  div_1.innerHTML = "<p> this is more annoying than i thought! </p>";
}




console.log("hi");

function comparingNumbers(n1, n2) {
  console.log("First Number: " + n1);
  console.log("Second Number: " + n2);

  if (parseInt(n1) > parseInt(n2)) {
    console.log(n1 + " is bigger than " + n2);
  } else if (parseInt(n2) > parseInt(n1)) {
    console.log(n2 + " is bigger than " + n1);
  } else {
    console.log(n1 + " is equal to " + n2);
  }

}

comparingNumbers(1, 2);
comparingNumbers(2, 2);
comparingNumbers(4, 1);

function userInfo(fName, lName) {
  return("My first name is " + fName + " and my last name is " + lName + ".");
}

console.log(userInfo("Anna", "Yu"));
