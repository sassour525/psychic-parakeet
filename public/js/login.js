$(document).ready(function() {
    var emailInput = $('input#email');
    var passwordInput = $('input#password');

    $(".login").on('submit', function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);

        emailInput.val('');
        passwordInput.val('');
    });

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