function getajax() {
  $.ajax({
    url: "https://en.wikipedia.org/api/rest_v1/?spec",
    type: "GET",
    datatype: "json",
    success: successFun,
    error: errorFun,
    complete: function(xhr, status){
      console.log("the request has been done");
    }
  });

  function successFun(result) {
    console.log(result);
    $("#ajax_text").html(result);
  }

  function errorFun(xhr,status,strErr) {
    console.log("error "+strErr);
  }
}

$("#ajaxbtn").click(getajax);
