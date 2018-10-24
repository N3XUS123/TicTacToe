$(document).ready(function () {


    $('#entrar').click(function (e) { 
        e.preventDefault();
        let em = $('#email').val();
        let pwd = $('#pass').val();

        $.ajax({
            method: "POST",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/auth/login",
            dataType: "json",
            data: {email: em, password: pwd }
        })
        .done(function( user ) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('username', user.username);
            localStorage.setItem('email', user.email);
            
            // Redirijo al usuario logueado a la página de Dashboard
            location.replace('tablero.html');
        })
        .fail(function( resp ) {
            $(document).ready(function () {
                alert('Email o contraseña incorrectos.'); 
             });
        });
    });
    
    
});