$(document).ready(function () {
    var token = localStorage.getItem('token');
    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');

    $.ajax({
            method: "GET",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/user/ranking",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            }
        })
        .done(function (ranking) {
            for (let usuario = 0; usuario < 5; usuario++) {
                $("#articleAjax").append(`
                <div class="article">
                    <div class="row">
                        <div class="col-2 date">
                            <div class="large">${usuario.id}</div>
                        </div>
                        <div class="col-10">
                            <h4>${usuario.username}</h4>
                            <p><span class="text-success"> ${usuario.points} </span>| ${usuario.time} </p>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                `);
            }
            ranking.forEach(user => {
                if (user.username == username) {
                    $("#userPositionAjax").append(`
                        <div class="article text-primary">
                            <div class="row">
                                <div class="col-2 date">
                                    <div class="large">${user.id}</div>
                                </div>
                                <div class="col-10">
                                    <h4>${user.username}</h4>
                                    <p><span class="text-success"> ${user.points} </span>| ${user.time} </p>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    `);
                }
            });
        })
        .fail(function (resp) {
            console.log('ERROR RESPUESTA');
            console.log(resp);
        });



});