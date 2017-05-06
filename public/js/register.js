$document.ready(function() {
    var signUpForm = $('form.signup');
    var nameInput = $('input#name');
    var emailInput = $('input#email');
    var passwordInput = $('input#password');
    var companyInput = $('input#company');

    //grab values from the signUpForm once submitted
    signUpForm.on('submit', function(event) {
        var userData = {
            name: nameInput.val().trim(),
            emai: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            company: companyInput.val().trim()
        };

        //if any values are missing do not proceed
        if (!userData.name || !userData.email || !userData.password || !userData.company) {
            return;
        }

        //call createUser so it can post the new user data
        createUser(userData.name, userData.email, userData.password, userData.company);

        //clear input fields
        nameInput.val('');
        emailInput.val('');
        passwordInput.val('');
        companyInput.val('');
    });

    //function to post new user data to route to create a user in the DB
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