/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Steve Fallet <steve.fallet@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-01-31 (Date de création)
 */

"use strict";
/*
console.log("Bonjour à tous!")
alert("Hello World");
document.querySelector("h2").textContent = 20;
document.getElementById("compteur-el").textContent = 100;
 */
let compteur = 0;
const compteurEl = document.getElementById("compteur-el");

function capturer() {
    compteur += 1;
    compteurEl.textContent = compteur;
    if (compteur < 5) {
        compteurEl.style.color = "green";
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow";
    } else {
        compteurEl.style.color = "red";
    }
}

const sauvegardeEl = document.getElementById("sauvegarde-el");
function sauvegarder() {
    let compteurStr = "<li>" + compteur + " Pokémons</li>";
    sauvegardeEl.innerHTML += compteurStr; // Ajouter la valeur actuelle du compteur
    localStorage.setItem("captures", sauvegardeEl.innerHTML); // Sauvegarder les captures dans le localStorage
    compteur = 0;
    compteurEl.textContent = compteur;
}

const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);

