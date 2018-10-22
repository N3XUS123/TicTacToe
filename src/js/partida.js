var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;
var dificultad = 1;
var inicio = 0;
var crono;

// Dibujar tablero
function dibujar() {

    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) document.getElementById("celda" + i).style = "background-color: white !important";
        if (tablero[i] == 1) document.getElementById("celda" + i).style = "background-color: red !important";
        if (tablero[i] == 2) document.getElementById("celda" + i).style = "background-color: blue !important";
    }
}

function pcelda(celda) {
    let consola = document.getElementById("consola");
    if (tablero[celda] == 0) {

        if (jugador == 1) {
            tablero[celda] = 1;
            if (inicio == 0) {
                var n = 0;
                var l = document.getElementById("number");
                crono=window.setInterval(function () {
                    l.innerHTML = n;
                    n++;
                }, 1000);
                inicio++;
            }
            jugador = 2;
            ia(dificultad);
        }

    } else {
        consola.innerHTML = "¡No puedes pulsar sobre una celda coloreada!";
    }
    dibujar();
    let r = ganador();
    switch (r) {
        case 0:
            break;
        case 1:
            consola.innerHTML = `¡Ganó el rojo!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
        clearInterval(crono);
            break;
        case 2:
            consola.innerHTML = `¡Ganó el azul!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
            break;
        case 3:
            consola.innerHTML = `¡Empate!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
            break;
    }
}

function ganador() {
    var numEspacios = 0;
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) numEspacios++;
    }
    // Las líneas horizontales
    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] != 0) return tablero[0];
    if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] != 0) return tablero[3];
    if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] != 0) return tablero[6];
    //Las líneas verticales
    if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] != 0) return tablero[0];
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] != 0) return tablero[1];
    if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] != 0) return tablero[2];
    //Las diagonales
    if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] != 0) return tablero[0];
    if (tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] != 0) return tablero[2];

    if (numEspacios > 0) {
        return 0;
    } else {
        return 3;
    }
}

function ia(dificultad) {
    let celdaRandom;
    if (dificultad == 1) {
        if (tablero.includes(0)) {
            do {
                celdaRandom = Math.floor(Math.random() * tablero.length);
            } while (tablero[celdaRandom] != 0);
            tablero[celdaRandom] = 2;
            dibujar();
        }
    } else if (dificultad == 2) {
        if (tablero.includes(0)) {
            // Seleccionar celda medio
            tablero[celdaRandom] = 2;
            dibujar();
        }
    } else {
        if (tablero.includes(0)) {
            // Seleccionar celda dificil
            tablero[celdaRandom] = 2;
            dibujar();
        }
    }
    jugador = 1;
}
