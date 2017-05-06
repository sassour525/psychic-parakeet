$(document).ready(function() {

    $.get('/api/user_data').then(function(user) {
        var userData = user;
        console.log(userData);
        buildCard('user-card', userData);
    });

    //log the user out
    $('#logout').on('click', function() {
        $.post('/logout').then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    });


    function buildCard(id, userData) {
        $('#' + id).empty();
        var userId = $('<p>');
        userId.text('Employee ID: ' + userData.id);
        var userEmail = $('<p>');
        userEmail.text('Email: ' + userData.email);
        console.log(userId);
        console.log(userEmail);
        $('#' + id).append(userId).append(userEmail);
    }

});
