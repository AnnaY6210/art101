/*
 * Author: Anna Yu
 * Created:3 March 2021
 * License: Public Domain
*/
function getajax () {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    data: {
      api_key: "J3udzoNSMg8LWL9ZBdw3C5ZTDowjJIhu1AIEzcfe"
    },
    type: "GET",
    datatype: "json",
    success: successFun,
    error: errorFun,
    complete: function(xhr, status){
      console.log("the request has been done");
    }
  });

  function successFun(result) {
    var img = document.createElement('img');
    img.src = result.hdurl;
    img.id = "SPACE";
    $("#output").append(img);
    $("#output").append("<p>" + result.explanation);
    console.log(result.hdurl)
    console.log(result);
  }

  function errorFun(xhr,status,strErr) {
    console.log("error "+strErr);
  }
}

$("#activate").click(getajax);
