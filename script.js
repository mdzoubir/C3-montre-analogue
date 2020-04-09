// Séléctionner les aiguilles de montre
let AIGUILLEHR = document.querySelector("#hour");
let AIGUILLEMIN = document.querySelector("#minute");
let AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let second = date.getSeconds();
//Ajouter l'heure , minite , seconde  dans des varaiables
let hourDeg = 1 / 120;
let minDeg = 1 / 10;
let secondDeg = 6;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let positionHr = ((hour * 3600) + (min * 60) + second) * hourDeg;
let positionMin = ((min * 60) + second) * minDeg;
let positionSecond = second * secondDeg;

// Déplacer les aiguilles 
function demarrerLaMontre() {
    positionSecond += secondDeg;
    positionMin += minDeg;
    positionHr += hourDeg;

    AIGUILLEHR.style.transform = "rotate(" + positionHr + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + positionMin + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + positionSecond + "deg)";


}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);