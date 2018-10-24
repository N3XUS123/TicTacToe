$(document).ready(function () {
    var token = localStorage.getItem('token');

    if (token == null) location.replace('index.html');
    
    function enviarPuntos(resultado, time) {    
        let tiempo = parseFloat(time);
        let result = resultado;
    
        $.ajax({
                method: "POST",
                url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/battle/create",
                dataType: "json",
                data: {win: result, time: tiempo },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        }
            })
            .done(function( resp ) {
                console.log(tiempo + " " +result)
            })
            .fail(function( resp ) {
                console.log('ERROR RESPUESTA');
                console.log(resp);
            });
        
    };        
});
