$(document).ready(function() {
  //Load. This method allows to make a Get petition to Ajax an insert the HTML result into our code (like in a div)
  //$(data).load("https://reqres.in/");

  // Get and Post

  $.get("https://reqres.in/api/users?page=2", { page: 3 }, function(response) {
    response.data.forEach((element, index) => {
      $("#data").append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  $("#form").submit(function(e) {
    e.preventDefault();

    var user = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    };
    /*
    console.log(user);
    $.post($(this).attr("action"), user, function(response) {
      console.log(response);
    }).done(function() {
      alert("user added correctly");
    }); 
    */

    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: user,
      beforeSend: function() {
        console.log("Sending user...");
      },
      success: function(response) {
        console.log(response);
      },
      error: function() {
        console.log("There has been an error");
      },
      timeout: 2000
    });

    return false;
  });
});
