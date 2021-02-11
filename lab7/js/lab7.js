/*
 * Author: Anna Yu
 * Created: 3 February 2021
 * License: Public Domain
*/

function sortName(userName) {
  // outputs userName into console
  console.log("name: " + userName);
  // splits userName into an array
  var arr = userName.split("");
  // outputs arr into console
  console.log("splitted name: " + arr);
  // sorts arr through ASCII
  var sortedArr = arr.sort();
  // outputs sortedArr into console
  console.log("sorted array: " + sortedArr);
  // puts sortedArr back together into a string
  var sortedName = sortedArr.join("");
  // outputs sortedName into console
  console.log("sorted name: " + sortedName);

  // returns sortedName
  return sortedName;
}

// output
name = window.prompt("Please tell me your name.")
document.writeln("Oh hey, I fixed your name: ", sortName(name), "</br>");

// NO SPACES :<
function noSpace(str) {
  var arr = str.split("");

  arr.sort();
  while (arr[0] == " ") {
    arr.shift();
  }
  return arr.join("");
}

//bonus question, input is string, function sorts both upperCase and lowerCase characters
function sortUpperAndLower(str) {
  var li = [];
  var lchar = "";
  // gets rid of spaces
  str = noSpace(str);
  var arr = str.split("");

  // loops through each letter in the array
  for (c of arr) {
    lchar = c;
    for (ch of arr) {
      // checks if lchar comes after ch
      if (lchar.toLowerCase().localeCompare(ch.toLowerCase()) == 1) {
        lchar = ch;
      }
    }
    li.push(lchar);
  }
  console.log(li);
}

var s = window.prompt("string please");
sortUpperAndLower(s);
