$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('#toggleNav').on('click', function () {
    if ($('nav').width() == '0'){
        $('nav').stop(true).animate({width:317});
        $('main').stop(true).animate({marginLeft:317})
    } else {
        $('nav').stop(true).animate({width:0});
        $('main').stop(true).animate({marginLeft:0})
    }
});