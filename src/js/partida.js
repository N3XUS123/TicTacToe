var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;
var dificultad = 1;
var inicio = 0;
var crono;
var celdas = document.getElementsByClassName('celda');
var consola = document.getElementById("consola");

// Dibujar tablero
function dibujar() {
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 1) document.getElementById("celda" + i).style = "background-image: url('images/equis.png'); background-size: 98px; background-repeat: no-repeat;";
        if (tablero[i] == 2) document.getElementById("celda" + i).style = "background-image: url('images/circulo.png'); background-size: 100px; background-repeat: no-repeat;";
    }
}

// Comprobar si alguien ha ganado
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

// Escoger celda
window.onload = function seleccionJugador() {
    let celdaSeleccionada;
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].onclick = () => marcarJugador(celdas[i].getAttribute('celda'));
    }

}

// Marcar celda
function marcarJugador(celdaSeleccionada) {
    if (tablero[celdaSeleccionada] == 0) {
        iniciarTiempo();
        tablero[celdaSeleccionada] = 1;
        jugador = 2;
        pasarTurno();
    } else {
        consola.innerHTML = "¡Esa celda ya está marcada!";
    }

}

// Iniciar tiempo
function iniciarTiempo() {
    if (inicio == 0) {
        var n = 0;
        var l = document.getElementById("number");
        crono = window.setInterval(function () {
            l.innerHTML = n;
            n++;
        }, 1000);
        inicio++;
    }
}

// Pasar de turno
function pasarTurno() {
    dibujar();
    let g = ganador();
    if (!endGame(g) && jugador == 2) {
        ia(dificultad);
    }
}

// Terminar partida si alguien gana.
function endGame(g) {
    let fin;
    switch (g) {
        case 0:
            fin = false;
            break;
        case 1:
            consola.innerHTML = `¡Ganan las X!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
            clearInterval(crono);
            fin = true;
            break;
        case 2:
            consola.innerHTML = `¡Ganan los O!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
            clearInterval(crono);
            fin = true;
            break;
        case 3:
            consola.innerHTML = `¡Empate!<a class="nav-link" href="javascript:location.reload()">
        Reiniciar</a>`;
            clearInterval(crono);
            fin = true;
            break;
    }
    return fin;
}

// Inteligencia artificial.
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
    pasarTurno();
}