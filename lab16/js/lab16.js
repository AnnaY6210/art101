/*
 * Author: Anna Yu
 * Created:8 March 2021
 * License: Public Domain
*/

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
    $("#output").show();
    $("#output").html("");
    $("#output").append("<h3>" + comicObj.title);
    $("#output").append(img);
    $("#output").append("<p>" + comicObj.alt);
    console.log(comicObj);
  }

  function errorFun(xhr,status,strErr) {
    console.log("error "+strErr);
  }
}

$("#button").click(getajax(1));
