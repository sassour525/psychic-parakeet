$(document).ready(function() {

    $.get('/api/user_data').then(function(user) {
        var userData = user;
        console.log(userData);
        // buildCard('user-card', userData);
        if (userData.isManager) {
            $.get('api/shifts').then(function(shifts) {
                var shiftList = shifts;
                console.log(shiftList);
                buildShiftList(shiftList);
            });
        }
    });

    function buildShiftList(shiftList) {
        //create a shifts div
        for (var i = 0; i < shiftList.length; i++) {
            var shiftForm = $('<form>');
            shiftForm.attr('action', '/' + shiftList[i].id + '?_method=PUT"');
            shiftForm.attr('method', 'POST');
            var employeeInput = $('<input>');
            employeeInput.attr('name', 'employee');
            var addButton = $('<button>');
            addButton.attr('type', 'submit');
            addButton.text('Update Shift');
            shiftForm.append(employeeInput).append(addButton);
            $('#shifts').append(shiftForm);
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


    // function buildCard(id, userData) {
    //     $('#' + id).empty();
    //     var userId = $('<p>');
    //     userId.text('Employee ID: ' + userData.id);
    //     var userEmail = $('<p>');
    //     userEmail.text('Email: ' + userData.email);
    //     console.log(userId);
    //     console.log(userEmail);
    //     $('#card-image').attr('src', 'http://shop.fox.com/imgcache/product/resized/000/873/472/catl/bobs-burgers-gene-stand-up_1000.jpg?k=1c9e9239&pid=873472&s=catl&sn=foxshop');
    //     var welcome = $('<span>');
    //     welcome.text(userData.email);
    //     $('.calendar').append(welcome);
    //     $('#' + id).append(userId).append(userEmail);
    // }