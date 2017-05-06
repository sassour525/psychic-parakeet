$(document).ready(function() {
    $('#logout').on('click', function() {
        $.post('/logout');
    });
});