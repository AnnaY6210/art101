/*
 * Author: Anna Yu
 * Created: 10 February 2021
 * License: Public Domain
*/


var outputEl = document.getElementById("output");
var new1El = document.createElement("p");

new1El.innerHTML = "something new";

var new2El = document.createElement("button");

new2El.innerHTML = "something else";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

var front = document.createElement("button");
front.innerHTML = "top!";
outputEl.insertBefore(front, outputEl.childNodes[0]);

new1El.style.color = "white";
new2El.style.color = "purple";
