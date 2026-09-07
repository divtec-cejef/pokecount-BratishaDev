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
}


