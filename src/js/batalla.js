$(document).ready(function () {
    var token = localStorage.getItem('token');
    let tiempo = localStorage.getItem('number');
    let result = localStorage.getItem('consola');

    $.ajax({
            method: "POST",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/battle/create",
            dataType: "json",
            bdata: {number: nu, result: res },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
        })
        .done(function(user) {
            // Redirijo al usuario logueado a la página de Dashboard
            location.replace('tablero.html');
        })
        .fail(function( resp ) {
            console.log('ERROR RESPUESTA');
            console.log(resp);
        });

});
