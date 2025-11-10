const biciclette = [
    { varieta: "Bmx", peso: 10 },
    { varieta: "Shimano", peso: 13 },
    { varieta: "Bici Da Cross", peso: 4 },
    { varieta: "Bmx-2", peso: 11 },
    { varieta: "Shimano-2", peso: 2 },
    { varieta: "Bici Da Cross", peso: 5 },
    { varieta: "Shimano-3", peso: 7 },
    { varieta: "Bmx-3", peso: 3 },
    { varieta: "Shimano-4", peso: 6 },
    { varieta: "Bmx-4", peso: 14 },
]
let biciclettaLeggera = 10000
let indiceBiciclettaLeggera = 0
for (let i = 0; i < biciclette.length; i++) {
    // console.log(i)
    if (biciclette[i].peso < biciclettaLeggera) {
        biciclettaLeggera = biciclette[i].peso
        indiceBiciclettaLeggera = i + 1
    }


}
console.log(`la bicicletta numero ${indiceBiciclettaLeggera} con indice del tuo array ${indiceBiciclettaLeggera - 1} ha il peso ${biciclettaLeggera} ed è la piu leggera `);

const squadre = [
    { nome: "Roma", Punti: 0, Falli: 0 },
    { nome: "Lazio", Punti: 0, Falli: 0 },
    { nome: "Napoli", Punti: 0, Falli: 0 },
    { nome: "Inter", Punti: 0, Falli: 0 },
    { nome: "Milan", Punti: 0, Falli: 0 },
    { nome: "Fiorentina", Punti: 0, Falli: 0 },
    { nome: "Juventus", Punti: 0, Falli: 0 },
]

let nomeFalli = []
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
let array = []
function arrayCollegamento(array, a, b) {
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
    else {
        console.log(`Complimenti! i tuoi numeri sono uguali, e sono ${a} e ${b} ed il tuo array come vedi... è VUOTO!`)
    }
    console.log(array)
    array.length = 0
}
arrayCollegamento(array, 10, 25)
arrayCollegamento(array, 25, 10)
arrayCollegamento(array, 15, 15)