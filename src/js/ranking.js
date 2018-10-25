$(document).ready(function () {
    var token = localStorage.getItem('token');
    var email = localStorage.getItem('email');
    var i = 0;
    
    if (token == null) location.replace('index.html');

    $.ajax({
            method: "GET",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/user/ranking",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            }
        })
        .done(function (ranking) {
            ranking.forEach(user => {
                i++;
                if (i <= 5) {
                    $("#articleAjax").append(`
                    <div class="article">
                        <div class="row">
                            <div class="col-2 date">
                                <div class="large">${i}</div>
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


                if (user.email == email) {
                    $("#userPositionAjax").append(`
                        <div class="article text-primary">
                            <div class="row">
                                <div class="col-2 date">
                                    <div class="large">${i}</div>
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