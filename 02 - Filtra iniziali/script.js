/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findA(array, letter) {
    const iniziali = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === letter) {
            iniziali.push(array[i])

        }

    }
    return iniziali

}

// Invoca la funzione qui e stampa il risultato in console
const result = findA(names, "A")
console.log(result);

const result2 = findA(names, "M")
console.log(result2);

const result3 = findA(names, "L")
console.log(result3);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]