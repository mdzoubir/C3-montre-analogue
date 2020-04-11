// Séléctionner les aiguilles de montre
let AIGUILLEHR = document.querySelector("#hour");
let AIGUILLEMIN = document.querySelector("#minute");
let AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    let secondDeg = 6 * second;
    let minDeg = 6 * min + (1 / 60) * secondDeg;
    let hourDeg = 30 * hour + (1 / 60) * minDeg;

    AIGUILLEHR.style.transform = `rotate(${hourDeg}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;
    AIGUILLESEC.style.transform = `rotate(${secondDeg}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);