function getajax () {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    crossDomain: true,
    data: {
      api_key: "DEMO_KEY",
      date: "2020-03-05"
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
    img.src = result.url;
    img.id = "SPACE";
    $("#ajax_text").append(img);
    $("#ajax_text").append("<p>" + result.explanation);
    console.log(result.url)
    console.log(result);
  }

  function errorFun(xhr,status,strErr) {
    console.log("error "+strErr);
  }
}

$("#ajaxbtn").click(getajax);
