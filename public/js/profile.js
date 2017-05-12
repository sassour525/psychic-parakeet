$(document).ready(function () {

  $('.modal').modal();

  //get user object for use on frontend
  $.get('/api/user_data').then(function (user) {
    var userData = user;
    console.log(userData);
    if (userData.manager) {
      $('#first-shift').hide();
      $('#second-shift').hide();
      $('.scheduleIcon').hide();
      $('.timeOffIcon').hide();
      $('#availabilityButton').hide();
      $('#manager-shift').show();
      //  Run function to get all employee data
      $.get('api/shifts_all').then(function (shifts) {
        var shiftList = shifts;
        console.log(shiftList);
        displayEmployeeShifts(shiftList);
      });
    }
    else{
    $.get('api/shifts').then(function (shifts) {
      var shiftList = shifts;
      console.log(shiftList);
      displayShifts(shiftList);
    });
  }
  });

  //update the logged in users availability
  $('#submit-availability').on("click", function () {
    var newAvailability = {};

    if ($("#myCheckbox-monMorn").is(':checked')) {
      newAvailability.monMorn = 1
    } else {
      newAvailability.monMorn = 0
    }
    if ($("#myCheckbox-tueMorn").is(':checked')) {
      newAvailability.tueMorn = 1
    } else {
      newAvailability.tueMorn = 0
    }
    if ($("#myCheckbox-wedMorn").is(':checked')) {
      newAvailability.wedMorn = 1
    } else {
      newAvailability.wedMorn = 0
    }
    if ($("#myCheckbox-thurMorn").is(':checked')) {
      newAvailability.thurMorn = 1
    } else {
      newAvailability.thurMorn = 0
    }
    if ($("#myCheckbox-friMorn").is(':checked')) {
      newAvailability.friMorn = 1
    } else {
      newAvailability.friMorn = 0
    }
    if ($("#myCheckbox-monAn").is(':checked')) {
      newAvailability.monAn = 1
    } else {
      newAvailability.monAn = 0
    }
    if ($("#myCheckbox-tueAn").is(':checked')) {
      newAvailability.tueAn = 1
    } else {
      newAvailability.tueAn = 0
    }
    if ($("#myCheckbox-wedAn").is(':checked')) {
      newAvailability.wedAn = 1
    } else {
      newAvailability.wedAn = 0
    }
    if ($("#myCheckbox-thurAn").is(':checked')) {
      newAvailability.thurAn = 1
    } else {
      newAvailability.thurAn = 0
    }
    if ($("#myCheckbox-fridayAn").is(':checked')) {
      newAvailability.friAn = 1
    } else {
      newAvailability.friAn = 0
    }

    //post new values to route to update DB
    $.ajax({
      method: "PUT",
      url: "/api/availability",
      data: newAvailability
    }).done(function () {
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


  //    DISPLAY EMPLOYEE SHIFTS
  //----------------------------------
  //  populates manager shift schedule
  function displayEmployeeShifts(shiftList){
    for (var i = 0; i < shiftList.length; i++){
      console.log(shiftList[i]);
      if(shiftList[i].weekday == "Monday"){
        if(!shiftList[i].night){ $("#manager-mon-am").html(namify(shiftList[i].UserId)); }
        else{ $("#manager-mon-pm").html(namify(shiftList[i].UserId)); }
      }
      if(shiftList[i].weekday == "Tuesday"){
        if(!shiftList[i].night){ $("#manager-tues-am").html(namify(shiftList[i].UserId)); }
        else{ $("#manager-tues-pm").html(namify(shiftList[i].UserId)); }
      }
      if(shiftList[i].weekday == "Wednesday"){
        if(!shiftList[i].night){ $("#manager-wed-am").html(namify(shiftList[i].UserId)); }
        else{ $("#manager-wed-pm").html(namify(shiftList[i].UserId)); }
      }
      if(shiftList[i].weekday == "Thursday"){
        if(!shiftList[i].night){ $("#manager-thurs-am").html(namify(shiftList[i].UserId)); }
        else{ $("#manager-thurs-pm").html(namify(shiftList[i].UserId)); }
      }
      if(shiftList[i].weekday == "Friday"){
        if(!shiftList[i].night){ $("#manager-fri-am").html(namify(shiftList[i].UserId)); }
        else{ $("#manager-fri-pm").html(namify(shiftList[i].UserId)); }
      }
    }
  }

  //    EMPLOYEE ID - > NAME
  //----------------------------------
  //  changes user id to match a name
  function namify(userId){
    if(userId == 1){ return "Gene"; }
    if(userId == 2){ return "Louise"; }
    if(userId == 3){ return "Tina"; }
    if(userId == 4){ return "Bob"; }
  }

  //set schedule
  $('.setSchedule').on("click", function() {
    console.log("MADE IT");
  });

  //log the user out
  $('#logout').on('click', function () {
    $.post('/logout').then(function (data) {
      window.location.replace(data);
    }).catch(function (err) {
      console.log(err);
    });
  });

});