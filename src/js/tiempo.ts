var inicio:number=0;
var crono:any;

var iniciarTiempo = () => {
    if (inicio == 0) {
        let n:number = 1;
        let l:any = document.getElementById("number");
        crono = window.setInterval(function () {
            l.innerHTML = n;
            n++;
        }, 1000);
        inicio++;
    }
}