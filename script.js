let shots = 0;
let hole = 1;

const ball = document.getElementById("ball");
const hitButton = document.getElementById("hitButton");

const power = document.getElementById("power");
const powerValue = document.getElementById("powerValue");

const shotsText = document.getElementById("shots");
const holeText = document.getElementById("hole");

const scoreShots = document.getElementById("scoreShots");
const scoreHole = document.getElementById("scoreHole");


// Mostrar potencia

power.addEventListener("input", () => {

    powerValue.textContent = power.value;

});


// Golpear pelota

hitButton.addEventListener("click", () => {

    shots++;

    shotsText.textContent = shots;
    scoreShots.textContent = shots;

    let fuerza = Number(power.value);

    /*
        Mientras mayor sea la potencia,
        más lejos se moverá la pelota.
    */

    let distancia = fuerza * 3.2;

    ball.style.transform =
        `translateY(-${distancia}px)`;

    // Comprobar si llegó al hoyo

    if (fuerza >= 85) {

        setTimeout(() => {

            alert("🎉 ¡HOYO CONSEGUIDO!");

            siguienteHoyo();

        }, 1000);

    }

});


// Pasar al siguiente hoyo

function siguienteHoyo() {

    hole++;

    shots = 0;

    holeText.textContent = hole;
    scoreHole.textContent = hole;

    shotsText.textContent = shots;
    scoreShots.textContent = shots;

    // Regresar pelota

    ball.style.transform = "translateY(0)";

    power.value = 50;

    powerValue.textContent = 50;

}


// Animación inicial

window.addEventListener("load", () => {

    ball.style.transform = "translateY(0)";

});