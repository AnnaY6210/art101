/*
 * Author: Anna Yu
 * Created: 17 February 2021
 * License: Public Domain
*/

// find challenge, problems, and results divs
chadiv = $("#challenge");
prodiv = $("#problems");
resdiv = $("#results");

// create buttons for each div with their respective titles
chadiv.append("<button class=btn id=chabtn>Challenge Button</button>");
prodiv.append("<button class=btn id=probtn>Problems Button</button>");
resdiv.append("<button class=btn id=resbtn>Results Button</button>");

// when chabtn is clicked
$("#chabtn").click(function() {
  chadiv.toggleClass("special");
})

// when probtn is clicked
$("#probtn").click(function() {
  prodiv.toggleClass("special");
})

// when resbtn is clicked
$("#resbtn").click(function() {
  resdiv.toggleClass("special");
})

btndiv = $("#buttons");

btndiv.append("<button class=btn id=colorbtn1>CLICK ME!</button>");
btndiv.append("<button class=btn id=colorbtn2>NO, CLICK ME!</button>");

$("#colorbtn1").click(function() {
  // grabs 3 numbers 0-255
  var color = [number(), number(), number()].join(",");
  // changes button back
  $("#colorbtn1").css("border-color", "#66fcf1");
  $("#colorbtn1").css("color", "#66fcf1");
  // changes other button
  $("#colorbtn2").css("border-color", "rgb(" + color + ")");
  $("#colorbtn2").css("color", "rgb(" + color + ")");
})

$("#colorbtn2").click(function() {
  // grab 3 numbers 0-255
  var color = [number(), number(), number()].join(",");
  // changes button back
  $("#colorbtn2").css("border-color", "#66fcf1");
  $("#colorbtn2").css("color", "#66fcf1");
  // changes other button
  $("#colorbtn1").css("border-color", "rgb(" + color + ")");
  $("#colorbtn1").css("color", "rgb(" + color + ")");
})

function number() {
  return Math.floor(Math.random() * Math.floor(256));
}
