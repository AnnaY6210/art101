/*
 * Author: Anna Yu
 * Created: 24 February 2021
 * License: Public Domain
*/

function multiples(start, end, mult) {
  for (var i = start; i <= end; i++) {
    var str = "";
    for (var m in mult) {
      if (i % m == 0) {
        str += mult[m];
      }
    }
    if (str == "") {
      str = i;
    } else {
      str = i + ": " + str + "!"
    }
    $("#output").append(`<p> ${str} </p>`);
  }
}

function dict() {
  var dict = {};
  for (var i = 1; i < 4; i++) {
    var numid = "num" + i;
    var textid = "text" + i;
    var num = $("#" + numid).val();
    var text = $("#" + textid).val();
    if (text && num) {
      dict[num] = text;
    }
  }
  return dict;
}

//when submit button clicked, all input values are places into multiples()
$("#submit").click(function() {
  var start = $("#startnum").val();
  var end = $("#endnum").val();
  var mult = dict();
  multiples(start, end, mult);
});
