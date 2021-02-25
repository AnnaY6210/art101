/*
 * Author: Anna Yu
 * Created: 16 February 2021
 * License: Public Domain
*/

document.getElementById("email-button").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mes = document.getElementById("message").value;
  console.log(name);
  console.log(email);
  console.log(mes);
  document.getElementById("name-and-email").innerHTML = "name: " + name + "<br> email: " + email;
  document.getElementById("mes").innerHTML = "message: " + mes;
})

$("#color-button").click(function() {
  var nameEmail = $("#name-and-email");
  var mes = $("#mes");
  nameEmail.css("color", "rgb(" + [number(), number(), number()].join(",") + ")");
  mes.css("color", "rgb(" + [number(), number(), number()].join(",") + ")");
})

// document.getElementById("color-button").addEventListener("click", function() {
//   var nameEmail = document.getElementById("name-and-email");
//   var mes = document.getElementById("mes");
//   nameEmail.style.color = "rgb(" + [number(), number(), number()].join(",") + ")";
//   mes.style.color = "rgb(" + [number(), number(), number()].join(",") + ")";
// })


function number() {
  return Math.floor(Math.random() * Math.floor(256));
}
