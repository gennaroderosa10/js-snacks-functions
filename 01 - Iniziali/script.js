/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

//prova con altro array
const names2 = ["Salvatore", "Antonio", "Gennaro"];

// Dichiara la funzione qui.
function findIniziali(array) {
    const iniziali = [];
    for (let i = 0; i < array.length; i++) {
        iniziali.push(array[i][0]);

    }
    return iniziali

}

// Invoca la funzione qui e stampa il risultato in console
const result = findIniziali(names)
console.log(result);

//prova con altro array
const result2 = findIniziali(names2)
console.log(result2);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]