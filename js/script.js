// controlla i pesi delle biciclette per trovare quella piu leggera
for (let i = 0; i < biciclette.length; i++) {
    // console.log(i)
    if (biciclette[i].peso < biciclettaLeggera) {
        biciclettaLeggera = biciclette[i].peso
        indiceBiciclettaLeggera = i + 1
    }
}
console.log(`la bicicletta numero ${indiceBiciclettaLeggera} con indice del tuo array ${indiceBiciclettaLeggera - 1} ha il peso ${biciclettaLeggera} ed è la piu leggera `);
// function generatorePunti() {
for (let i = 0; i < squadre.length; i++) {
    // let numeroGenerato = Math.floor(Math.random() * 114 + 1)
    // squadre[i].Punti = numeroGenerato;


    // genero i numeri casuali da assegnare a punti e falli
    squadre[i].Punti = Math.floor(Math.random() * 114 + 1) //114 sono i punti totali disponibili in campionato
    squadre[i].Falli = Math.floor(Math.random() * 200 + 1)
}
// }
console.log(squadre);
//creo un array con solo nome e falli delle squadre
squadre.forEach(squadre => {
    nomeFalli.push({
        nome: squadre.nome, falli: squadre.Falli
    })
})
console.log(nomeFalli)
// Funzione per creare un array contentente i numeri compresi tra a e b
function arrayCollegamento(array, a, b) {

    // early return
    if (a === b) {
        console.log(`Complimenti! i tuoi numeri sono uguali, e sono ${a} e ${b} ed il tuo array come vedi... è VUOTO!`);
        return;
    }
    // confronto quando b è maggiore di a
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            array.push(i)
        }
    }
    // confronto quando a è maggiore di b
    else if (a > b) {
        for (let i = b + 1; i < a; i++) {
            array.push(i)
        }
    }

    console.log('pieno', array)
    return [];
}

array = arrayCollegamento(array, 10, 25)
array = arrayCollegamento(array, 45, 30)
array = arrayCollegamento(array, 15, 15)