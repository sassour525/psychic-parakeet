$document.ready(function() {
    var signUpForm = $('form.signup');
    var nameInput = $('input#name');
    var emailInput = $('input#email');
    var passwordInput = $('input#password');
    var companyInput = $('input#company');

    signUpForm.on('submit', function(event) {
        var userData = {
            name: nameInput.val().trim(),
            emai: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            company: companyInput.val().trim()
        };

        if (!userData.name || !userData.email || !userData.password || !userData.company) {
            return;
        }

        createUser(userData.name, userData.email, userData.password, userData.company);

        nameInput.val('');
        emailInput.val('');
        passwordInput.val('');
        companyInput.val('');
    });

    function createUser(name, email, password, company) {
        $.post('/api/signup', {
            name: name,
            email: email,
            password: password,
            company: company
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    }
});