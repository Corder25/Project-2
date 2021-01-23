$(document).ready(() => {
    // Getting references to our form and inputs
    const rantForm = $("form.rant-form");
    const restaurantNameInput = $("#restaurant-name");
    const bodyInput = $("#body");
    const ratingInput = $("#rating");
    const submitBtn = $("#submit-btn");
    
    let user_id;
    $.get("/api/user_data").then(data => {
      user_id = data.id;
    });

    // When the form is submitted, we validate there's an email and password entered
    rantForm.on("submit", event => {
      event.preventDefault();
      const rantData = {
          restaurant_name: restaurantNameInput.val().trim(),
          body: bodyInput.val().trim(),
          rating: ratingInput.val(),
<<<<<<< HEAD
          user_id: user_id,
          UserId: user_id
=======
          user_id, UserId: user_id
>>>>>>> 39d8ebd3a23a9a08aea3e796485061809f558ac8
      };

      if (!rantData.restaurant_name || !rantData.body || !rantData.rating) {
        return;
      }

      console.log(rantData);

      submitRant(rantData.restaurant_name, rantData.body, rantData.rating, rantData.user_id);
  
  
      // If we have an email and password we run the loginUser function and clear the form
      restaurantNameInput.val("");
      bodyInput.val("");
    });

<<<<<<< HEAD
    function submitRant(res_name, body, rating, user_id) {
      $.post("/api/rants", {
        restaurant_name: res_name,
        body: body,
        rating: rating,
        user_id: user_id,
        UserId: user_id
      }).then(() => {
        window.location.replace("/my-rants");
      }).catch(err => {
        console.log(err);
      });
    }
=======
    function submitRant(rant) {
        $.post("/api/rants", rant, function() {
          window.location.href = "/my-rants";
        });
      }

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // function postRant(restaurant_name, body, rating, user_id) {
    //   $.post("/api/rants", {
    //     email: email,
    //     password: password
    //   })
    //     .then(() => {
    //       window.location.replace("/my-rants");
    //       // If there's an error, log the error
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
>>>>>>> 39d8ebd3a23a9a08aea3e796485061809f558ac8
});