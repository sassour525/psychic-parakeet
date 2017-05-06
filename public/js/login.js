
$(document).ready(function() {
    var emailInput = $('input#email');
    var passwordInput = $('input#password');

    $(".login").on('submit', function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }

        //if any values are missing do not proceed
        if (!userData.email || !userData.password) {
            return;
        }

        //call loginUser so it can post the data to authenticate
        loginUser(userData.email, userData.password);

        //clear input fields
        emailInput.val('');
        passwordInput.val('');
    });

    //post data to authenticate the user
    function loginUser(email, password) {
        $.post('api/login', {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function(err){
            console.log(err);
        });
    }
});