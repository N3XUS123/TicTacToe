$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('#toggleNav').on('click', function () {
    if ($('nav').width() == '0'){
        $('nav').stop(true).animate({width:317});
        $('header').stop(true).animate({marginLeft:317})
    } else {
        $('nav').stop(true).animate({width:0});
        $('header').stop(true).animate({marginLeft:0})
    }
});

$('#logout').click(function (e) { 
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

    location.replace("index.html");
});