$(document).ready(function () {

  $('.modal').modal();

  //get user object for use on frontend
  $.get('/api/user_data').then(function (user) {
    var userData = user;
    console.log(userData);
    if (userData.manager) {
      $('#first-shift').hide();
      $('#second-shift').hide();
      $('#manager-shift').show();
    }
    $.get('api/shifts').then(function (shifts) {
      var shiftList = shifts;
      console.log(shiftList);
      displayShifts(shiftList);
    });
  });

  //update the logged in users availability
  $('#submit-availability').on("click", function() {
    console.log("YOU MADE IT");
    var newAvailability = {};
    if ($("#myCheckbox-mon-morn").is(':checked')) {
      newAvailability.monMorn = 1
    } else {
      newAvailability.monMorn = 0
    }
    if ($("#myCheckbox-tue-morn").is(':checked')) {
       newAvailability.tueMorn = 1
    } else {
      newAvailability.tueMorn = 0
    }
    if ($("#myCheckbox-wed-morn").is(':checked')) {
         newAvailability.wedMorn = 1
    } else {
      newAvailability.wedMorn = 0
    }
    if ($("#myCheckbox-thur-morn").is(':checked')) {
         newAvailability.thurMorn = 1
    } else {
      newAvailability.thurMorn = 0
    }
    if ($("#myCheckbox-fri-morn").is(':checked')) {
        newAvailability.friMorn = 1
    } else {
      newAvailability.friMorn = 0
    }
    if ($("#myCheckbox-mon-afternoon").is(':checked')) {
       newAvailability.monAn = 1
    } else {
      newAvailability.monAn = 0
    }
    if ($("#myCheckbox-tue-afternoon").is(':checked')) {
       newAvailability.tueAn = 1
    } else {
      newAvailability.tueAn = 0
    }
    if ($("#myCheckbox-wed-afternoon").is(':checked')) {
       newAvailability.wedAn = 1
    } else {
      newAvailability.wedAn = 0
    }
    if ($("#myCheckbox-thur-afternoon").is(':checked')) {
       newAvailability.thurAn = 1
    } else {
      newAvailability.thurAn = 0
    }
    if ($("#myCheckbox-friday-afternoon").is(':checked')) {
       newAvailability.friAn = 1
    } else {
      newAvailability.friAn = 0
    }

    //post new values to route to update DB
    $.ajax({
      method: "PUT",
      url: "/api/availability",
      data: newAvailability
    }).done(function() {
      window.location.href = "/profile";
    });
  });

  //display shifts the user is assigned
  function displayShifts(shiftList) {
    for (var i = 0; i < shiftList.length; i++) {
      if (shiftList[i].weekday == 'Monday') {
        if (!shiftList[i].night) {
          $('#mon-morn').html('<i class="material-icons">schedule</i>');
        } else {
          $('#mon-night').html('<i class="material-icons">schedule</i>');
        }
      } else if (shiftList[i].weekday == 'Tuesday') {
        if (!shiftList[i].night) {
          $('#tue-morn').html('<i class="material-icons">schedule</i>');
        } else {
          $('#tue-night').html('<i class="material-icons">schedule</i>');
        }
      } else if (shiftList[i].weekday == 'Wednesday') {
        if (!shiftList[i].night) {
          $('#wed-morn').html('<i class="material-icons">schedule</i>');
        } else {
          $('#wed-night').html('<i class="material-icons">schedule</i>');
        }
      } else if (shiftList[i].weekday == 'Thursday') {
        if (!shiftList[i].night) {
          $('#thur-morn').html('<i class="material-icons">schedule</i>');
        } else {
          $('#thur-night').html('<i class="material-icons">schedule</i>');
        }
      } else if (shiftList[i].weekday == 'Friday') {
        if (!shiftList[i].night) {
          $('#fri-morn').html('<i class="material-icons">schedule</i>');
        } else {
          $('#fri-night').html('<i class="material-icons">schedule</i>');
        }
      }
    }
  }

  //log the user out
  $('#logout').on('click', function () {
    $.post('/logout').then(function (data) {
      window.location.replace(data);
    }).catch(function (err) {
      console.log(err);
    });
  });

});