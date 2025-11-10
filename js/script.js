
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
    squadre[i].Punti = Math.floor(Math.random() * 114 + 1)
    squadre[i].Falli = Math.floor(Math.random() * 200 + 1)
}
// }
console.log(squadre);
squadre.forEach(squadre => {
    nomeFalli.push({
        nome: squadre.nome, falli: squadre.Falli
    })
})
console.log(nomeFalli)

function arrayCollegamento(array, a, b) {

    // early return
    if (a === b) {
        console.log(`Complimenti! i tuoi numeri sono uguali, e sono ${a} e ${b} ed il tuo array come vedi... è VUOTO!`);
        return;
    }

    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            array.push(i)
        }
    }
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