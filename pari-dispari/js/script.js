// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

alert('Sfida il computer a pari o dispari!')
// chiedo all'utente di scegliere tra pari e dispari
const userEvenOrOdd = prompt('Scegli tra pari e dispari!')
console.log('user choice:', userEvenOrOdd);
// chiedo all'utente di inseriire un numero tra 1 e 5
const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log('user number:', userNumber);

// genero un numero random tra 1 e 5 per il computer (funzione)
const cpuNumber = getRndInteger(1, 5);
console.log('cpu number:', cpuNumber);

// sommo i due numeri

// stabilisco se la somma dei due numeri è pari o dispari (funzione)

// dichiaro il vincitore

// #region FUNCTIONS
// FUNCTIONS

// Ritorna un numero random tra il minimo e il massimo (inclusi)
// min -> numero intero che rappresenta il numero minimo da cui partire per generare il numero random
// max -> numero intero che rappresenta il numero massimo da cui partire per generare il numero random
// return -> numero intero random tra il minimo e il massimo
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// verifica se un numero è pari o dispari
// number -> numero intero che rappresenta il numero da verificare
// return -> stringa 'even' se pari, altrimenti 'odd'

function isEvenOrOdd(number) {
    let result;
    if (number % 2 === 0) {
        result = 'even';
    } else {
        result = 'odd';
    }
    return result;
}

// #endregion FUNCTIONS