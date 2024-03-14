// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola

// per capire se è palindroma:
// giro una parola al contrario
// se la parola è uguale alla parola al contrario allora è palindroma



// #region FUNCTIONS

// 1
// prende una parola e la ritorna girata al contrario
// word -> stringa che rapresenta la parola da girare
// return -> stringa che rappresenta la parola girata

function revertWord(word) {
    let revertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        revertedWord += thisLetter;
    }
    return revertedWord;
}
// #endregion