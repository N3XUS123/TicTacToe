"use strict";
var inicio = 0;
var crono;
// Iniciar tiempo
/*function iniciarTiempo() {
  if (inicio == 0) {
      let n:number = 1;
      let l:any = document.getElementById("number");
      crono = window.setInterval(function () {
          l.innerHTML = n;
          n++;
      }, 1000);
      inicio++;
  }
}*/
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
