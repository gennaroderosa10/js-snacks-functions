/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function findLetter(stringa) {
    const vocali = ["a", "e", "i", "o", "u"];
    let conto = 0;

    for (let i = 0; i < stringa.length; i++) {
        let stringIndx = stringa[i];

        for (let y = 0; y < vocali.length; y++) {
            if (stringIndx === vocali[y]) {
                conto++
            }
        }

    }
    return conto;

}


// Invoca la funzione qui e stampa il risultato in console

const result = findLetter(word);
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)