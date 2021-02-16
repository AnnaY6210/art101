/*
 * Author: Anna Yu
 * Created: 11 February 2021
 * License: Public Domain
*/

// find the button element
var subtn = document.getElementById("my-button");
 // find div "output"
var output = document.getElementById("output");
// create element p
var p = document.createElement("p");

// create element newEl
var newEl = document.createElement("p");
//place element p into div "output"
output.appendChild(p);
output.appendChild(newEl);
// occurs when the button is clicked
 subtn.addEventListener("click", function() {
   // removes "placeholder" element
   document.getElementById("placeholder").remove();

   // find name element
   var userName = document.getElementById("user-name");
   // splits userName into an array
   var nameArr = (userName.value).toLowerCase().split("");
   // shuffles nameArr
   nameArr = shuffleArray(nameArr);
   // joins array into a string
   nameArr = nameArr.join("");
   // places nameArr into div "output"
   p.innerHTML = "Your new name: " + nameArr;

   // assigns the value of the element to userName
   userName = userName.value;
   // turns the value of userName lower case, splits it into an array, sorts it, and turns it back into a string
   userName = userName.toLowerCase().split("").sort().join("");
   // outputs the value of userName into the console
   console.log("user name:", userName);
   //replaces the contents of output div with results
   newEl.innerHTML = "Your sorted name: " + userName;

 });

// Thanks to https://people.ucsc.edu/~wmodes/art101/lab7/js/lab7.js
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // loops through remaining elements
  while (0 !== currentIndex) {
    // grabs a random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swaps it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
