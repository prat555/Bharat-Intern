$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        const formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        // Send form data to the server
        $.ajax({
            type: 'POST',
            url: '/register',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert(response);
            },
            error: function(error) {
                console.error(error);
                alert('Registration failed. Please try again.');
            }
        });
    });
});
