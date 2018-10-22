var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;
var dificultad = 2;
var inicio = 0;
var crono;
var celdas = document.getElementsByClassName('celda');
var consola = document.getElementById("consola");
var partidaTerminada = false;

var COMBOS = {
    ganadores: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
};

// Dibujar tablero
function dibujar() {
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) document.getElementById("celda" + i).style = "background-image: url(''); background-size: 98px; background-repeat: no-repeat;";
        if (tablero[i] == 1) document.getElementById("celda" + i).style = "background-image: url('images/equis.png'); background-size: 98px; background-repeat: no-repeat;";
        if (tablero[i] == 2) document.getElementById("celda" + i).style = "background-image: url('images/circulo.png'); background-size: 100px; background-repeat: no-repeat;";
    }
}

// Comprobar si alguien ha ganado
function ganador() {
    let numEspacios = 0;
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
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].onclick = () => marcarJugador(celdas[i].getAttribute('celda'));
    }
}

// Marcar celda
function marcarJugador(celdaSeleccionada) {
    if (!partidaTerminada) {
        if (tablero[celdaSeleccionada] == 0) {
            iniciarTiempo();
            tablero[celdaSeleccionada] = 1;
            jugador = 2;
            pasarTurno();
        } else {
            consola.innerHTML = "¡Esa celda ya está marcada!";
        }
    }
}

// Iniciar tiempo
function iniciarTiempo() {
    if (inicio == 0) {
        let n = 0;
        let l = document.getElementById("number");
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
    if (endGame(g)) {
        partidaTerminada = true;
    } else if (!endGame(g) && jugador == 2) {
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
            consola.innerHTML = `¡Ganan las X!<a class="nav-link" id="reiniciarPartida">
        Reiniciar</a>`;
            document.getElementById('reiniciarPartida').onclick = () => reiniciarPartida();
            clearInterval(crono);
            fin = true;
            break;
        case 2:
            consola.innerHTML = `¡Ganan los O!<a class="nav-link" id="reiniciarPartida">
        Reiniciar</a>`;
            document.getElementById('reiniciarPartida').onclick = () => reiniciarPartida();
            clearInterval(crono);
            fin = true;
            break;
        case 3:
            consola.innerHTML = `¡Empate!<a class="nav-link" id="reiniciarPartida">
        Reiniciar</a>`;
            document.getElementById('reiniciarPartida').onclick = () => reiniciarPartida();
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
            if (crono % 2 == 0) {
                celdaRandom = mejorJugada();
            } else {
                if (tablero.includes(0)) {
                    do {
                        celdaRandom = Math.floor(Math.random() * tablero.length);
                    } while (tablero[celdaRandom] != 0);
                }
            }
                tablero[celdaRandom] = 2;
            dibujar();
        }
    } else {
        if (tablero.includes(0)) {
            celdaRandom = mejorJugada();
            tablero[celdaRandom] = 2;
            dibujar();
        }
    }
    jugador = 1;
    pasarTurno();
}

// Cambiar dificultad
document.getElementById('dificultad1').onclick = () => {
    reiniciarPartida();
    dificultad = 1;
}

document.getElementById('dificultad2').onclick = () => {
    reiniciarPartida();
    dificultad = 2;
}
document.getElementById('dificultad3').onclick = () => {
    reiniciarPartida();
    dificultad = 3;
}

// Reinicia la partida
function reiniciarPartida() {
    tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    jugador = 1;
    inicio = 0;
    clearInterval(crono);
    consola.innerHTML = '';
    partidaTerminada = false;
    dibujar();
}


function mejorJugada() {

    // Posibles combos
    let puntuacionCeldas = [3, 2, 3, 2, 4, 2, 3, 2, 3];

    // Quita las celdas ya escogidas
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i] !== 0) {
            puntuacionCeldas[i] -= 99;
        }
    }

    // Comprueba los posibles combos
    for (let combo = 0; combo < COMBOS.ganadores.length; combo++) {
        let a = COMBOS.ganadores[combo][0];
        let b = COMBOS.ganadores[combo][1];
        let c = COMBOS.ganadores[combo][2];

        if (tablero[a] === tablero[b]) {
            if (tablero[a] !== 0) {
                if (tablero[c] === 0) {
                    puntuacionCeldas[c] += 10;
                }
            }
        }

        if (tablero[a] === tablero[c]) {
            if (tablero[a] !== 0) {
                if (tablero[b] === 0) {
                    puntuacionCeldas[b] += 10;
                }
            }
        }

        if (tablero[b] === tablero[c]) {
            if (tablero[b] !== 0) {
                if (tablero[a] === 0) {
                    puntuacionCeldas[a] += 10;
                }
            }
        }
    }

    // Busca el mejor movimiento para hacer
    let mejorCelda = -1;
    let mayorPuntuacion = -999;

    // Recorre la "puntuación" de las celdas para elegir la mejor
    for (let i = 0; i < tablero.length; i++) {
        if (puntuacionCeldas[i] > mayorPuntuacion) {
            mayorPuntuacion = puntuacionCeldas[i];
            mejorCelda = i;
        }
    }

    return mejorCelda;

}