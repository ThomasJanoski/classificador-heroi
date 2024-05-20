const ExpTable = {
    Ferro: (Exp) => {
        return Exp <= 1000
    },
    Bronze: (Exp) => {
        return Exp > 1000 & Exp <= 2000 
    },
    Prata: (Exp) => {
        return Exp > 2000 & Exp <= 5000 
    },
    Ouro: (Exp) => {
        return Exp > 5000 & Exp <= 7000 
    },
    Platina: (Exp) => {
        return Exp > 7000 & Exp <= 8000 
    },
    Ascendente: (Exp) => {
        return Exp > 8000 & Exp <= 9000 
    },
    Imortal: (Exp) => {
        return Exp > 9000 & Exp <= 10000 
    },
    Radiante: (Exp) => {
        return Exp > 10000
    }
}

const ExpQuantity = 5000
const Username = "Thomas"
let CurrentElo = "Ferro"

for (let key in ExpTable) {
    if (ExpTable[key](ExpQuantity)) {CurrentElo = key; break}

}

console.log(`O Herói de nome ${Username} está no nível de ${CurrentElo}`)