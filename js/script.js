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
