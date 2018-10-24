$(document).ready(function () {


    $('#registro').click(function (e) { 
        e.preventDefault();
        let us = $('#usuario').val();
        let em = $('#email').val();
        let pwd = $('#pass').val();

        $.ajax({
            method: "POST",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/auth/signup",
            dataType: "json",
            data: {username: us, email: em, password: pwd }
        })
        .done(function( user ) {

            // Redirijo al usuario logueado a la página de Dashboard
            location.replace('index.html');
        })
        .fail(function( resp ) {
            console.log('ERROR RESPUESTA');
            console.log(resp);
        });

    });
    
    
});