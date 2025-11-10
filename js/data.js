// array di biciclette(oggetti)
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
];
// indice della bicicletta piu leggera di partenza(la prima quindi indice 0)
let indiceBiciclettaLeggera = 0
// Assumo come iniziale bicicletta piu leggera la prima
let biciclettaLeggera = biciclette[indiceBiciclettaLeggera];
// array di squadre(oggetti)
const squadre = [
    { nome: "Roma", Punti: 0, Falli: 0 },
    { nome: "Lazio", Punti: 0, Falli: 0 },
    { nome: "Napoli", Punti: 0, Falli: 0 },
    { nome: "Inter", Punti: 0, Falli: 0 },
    { nome: "Milan", Punti: 0, Falli: 0 },
    { nome: "Fiorentina", Punti: 0, Falli: 0 },
    { nome: "Juventus", Punti: 0, Falli: 0 },
]
// Creo un array che riempiro solo con nomi delle squadre e i rispettivi falli
let nomeFalli = []

// creo l'array vuoto per poterlo riempire con i numeri tra a e b
let array = []