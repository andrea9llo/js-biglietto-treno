// Il programma dovrà chiedere
// all’utente il numero di chilometri e
// l’età e dovrà calcolare il prezzo totale
// del viaggio.
// Il prezzo del biglietto è definito in
// base ai km (0.21 €cent al km) ma c’è
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65

// insieme tutte variabili
var km, eta,costoBigl;

// chiedo all'utente il numero di km da percorrere
km = parseInt( prompt("Benvenuti in Trenitalia, inserisca n° Km da percorrere."));
console.log(km);

// chiedo all'utente età
eta = parseInt( prompt("Età del passeggiero/a."))
console.log(eta);

// definire prezzo biglietto
costoBigl = km * 0.21;
console.log(costoBigl);

// definirele condizioni per utenti minorenni e untenti over 65
