$(document).ready(function() {

    $.get('/api/user_data').then(function(user) {
        var userData = user;
        console.log(userData);
        $('#user-card').append('<p>Employee ID: ' + userData.id + '</p>');
        $('#user-card').append('<p>Email: ' + userData.email + '</p>');
    });

    //log the user out
    $('#logout').on('click', function() {
        $.post('/logout').then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    });
});
