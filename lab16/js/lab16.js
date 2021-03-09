/*
 * Author: Anna Yu
 * Created:8 March 2021
 * License: Public Domain
*/

var num = 1;

function getajax (number) {
  $.ajax({
    url: `https://xkcd.com/${number}/info.0.json`,
    type: "GET",
    datatype: "json",
    success: successFun,
    error: errorFun,
    complete: function(xhr, status){
      console.log("the request has been done");
    }
  });

  function successFun(comicObj) {
    var img = document.createElement('img');
    img.src = comicObj.img;
    img.id = "img";
    $("#btn").hide();
    $("#output").show();

    $("#output").html("");
    $("#output").append("<h3>" + comicObj.title);
    $("#output").append(img);
    $("#output").append("<p>" + comicObj.alt);
    console.log(comicObj);

    $("#output").append("<button class='button' id='minus'>Previous")
    $("#output").append("<button class='button' id='plus'>Next")
  }

  function errorFun(xhr,status,strErr) {
    console.log("error "+strErr);
  }
}
$("#btn").click(getajax(num));

$("body").on("click", "#minus", function(){
  num -= 1;
  getajax(num);
});

$("body").on("click", "#plus", function(){
  num += 1;
  getajax(num);
});
