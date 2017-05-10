$(document).ready(function() {

    //get user object for use on frontend
    $.get('/api/user_data').then(function(user) {
        var userData = user;
        console.log(userData);
        if (userData.manager) {
            $('#first-shift').hide();
            $('#second-shift').hide();
            $('#manager-shift').show();
        }
        $.get('api/shifts').then(function(shifts) {
            var shiftList = shifts;
            console.log(shiftList);
            displayShifts(shiftList);
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
    $('#logout').on('click', function() {
        $.post('/logout').then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    });

});