/*
 * Author: Anna Yu
 * Created: 24 February 2021
 * License: Public Domain
*/

function multiples() {
  // loops through 1 to 200
  for (var i = 1; i < 201; i++) {
    // creates empty string
    var str = "";
    // adds Fizz to str if i is divisible by 3
    if (i % 3 == 0) str += "Fizz";
    // adds Buzz to str if i is divisible by 3
    if (i % 5 == 0) str += "Buzz";
    // adds Boom to str if i is divisible by 7
    if (i % 7 == 0) str += "Boom";
    // checks if str is an empty string
    if (str == "") {
      // sets str to i
      str = i;
    } else {
      // set str to i: str!
      str = i + ": " + str + "!";
    }
    // appends str to the output div
    $("#output").append("<p>" + str + "</p>");
  }
}

multiples();
