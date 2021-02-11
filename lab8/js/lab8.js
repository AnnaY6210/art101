/*
 * Author: Anna Yu
 * Created: 8 February 2021
 * License: Public Domain
*/

function firstThing(test) {
  document.writeln(test + " :This is the first thing");
}

function secondThing(test) {
  document.writeln(test + " :This is the second thing");
}

function thirdThing(test) {
  document.writeln(test + " :This is the third thing");
}

//test 1 - call all functions
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//test 2 - call in order
setTimeout(function() {firstThing("TEST 2");}, 0);
setTimeout(function() {secondThing("TEST 2");}, 0);
setTimeout(function() {thirdThing("TEST 2");}, 0);

//test 3 - call in order 2, 3, 1
setTimeout(function() {firstThing("TEST 3");}, 2000);
setTimeout(function() {secondThing("TEST 3");}, 0);
setTimeout(function() {thirdThing("TEST 3");}, 1000);

var ouput = document.getElementById("output");
