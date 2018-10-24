"use strict";
var inicio = 0;
var crono;
var iniciarTiempo = function () {
    if (inicio == 0) {
        var n_1 = 1;
        var l_1 = document.getElementById("number");
        crono = window.setInterval(function () {
            l_1.innerHTML = n_1;
            n_1++;
        }, 1000);
        inicio++;
    }
};
