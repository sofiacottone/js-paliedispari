// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola per sapere se è palindroma');
console.log('user word:', userWord);

// per capire se è palindroma:
// giro una parola al contrario
let userRevertedWord = revertWord(userWord);
console.log('user word reverted:', userRevertedWord);

// se la parola è uguale alla parola al contrario allora è palindroma
let userMessage;
if (userWord === userRevertedWord) {
    userMessage = 'La parola è palindroma!';
} else {
    userMessage = 'La parola non è palindroma!';
}
console.log('palindroma?', userMessage)
alert(userMessage);

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