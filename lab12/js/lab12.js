/*
 * Author: Anna Yu
 * Created: 22 February 2021
 * License: Public Domain
*/

function sortingHat(str) {
  var hash = Math.abs(hashConvert(str));
  console.log(hash);
  var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  var houselen = houses.length;
  var rem = hash % houselen;
  return houses[rem];
}
// from https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
function hashConvert(str) {
  var hash = 0;
  if (str.length == 0) return hash;

  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash
}

$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  houseText = "<p> The Sorting Hat has sorted you into " + house + "!</p>"
  $("#output").html(houseText);
  switch(house) {
    // from harrypotter.fandom.com
    case "Gryffindor":
      $(".alert p").html("<p> Gryffindor values bravery, daring, nerve, and chivalry. </p>");
      $(".alert").show();
      break;

    case "Ravenclaw":
      $(".alert p").html("<p> Ravenclaw values intelligence, knowledge, curiosity, creativity, and wit. </p>");
      $(".alert").show();
      break;

    case "Slytherin":
      $(".alert p").html("<p> Slytherin values ambition, leadership, self-preservation, cunning, and resourcefulness.</p>");
      $(".alert").show();
      break;

    case "Hufflepuff":
      $(".alert p").html("<p> Hufflepuff values hard work, dedication, patience, loyalty, and fair play</p>");
      $(".alert").show();
      break;
  }


});
