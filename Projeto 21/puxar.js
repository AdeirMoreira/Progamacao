//export default puxar

function puxar(maoJogador, cartasEmJogo) {

    const baralho = ['A♦️', 'A♥️', 'A♣️', 'A♠️', 'K♦️', 'K♥️', 'K♣️', 'K♠️', 'J♦️', 'J♥️', 'J♣️', 'J♠️', 'Q♦️', 'Q♥️', 'Q♣️', 'Q♠️', '2♦️', '2♥️', '2♣️', '2♠️',
        '3♦️', '3♥️', '3♣️', '3♠️', '4♦️', '4♥️', '4♣️', '4♠️', '5♦️', '5♥️', '5♣️', '5♠️', '6♦️', '6♥️', '6♣️', '6♠️', '7♦️', '7♥️', '7♣️', '7♠️', '8♦️', '8♥️', '8♣️', '8♠️',
        '9♦️', '9♥️', '9♣️', '9♠️', '10♦️', '10♥️', '10♣️', '10♠️']

    let cartaArray = baralho.splice(Math.floor(Math.random() * 52), 1), carta = cartaArray[0].slice(0, cartaArray[0].length), valor

    if (carta.includes('K') || carta.includes('J') || carta.includes('Q')) valor = 10
    else if (carta.includes('A')) valor = 11
    else {
        if (carta.includes('10')) valor = 10
        else valor = +carta.slice(0, 1)
    }


    if (maoJogador.map(e => e.carta).includes(carta)) ({ carta, valor } = puxar(maoJogador))
    //Desestruturação de objeto retornado pela função recursiva -> carta = puxar(maoJogador).carta, valor = puxar(maoJogador).valor
    if (cartasEmJogo !== undefined) if (cartasEmJogo.map(e => e.carta).includes(carta)) ({ carta, valor } = puxar(maoJogador, cartasEmJogo))

    return { carta, valor }
}
//puxar()
let maoJogador = []
do {
    maoJogador = [puxar(maoJogador)], maoJogador.push(puxar(maoJogador))
} while (maoJogador[0].carta.includes('A') && maoJogador[1].carta.includes('A'))
//Enquanto os naipes das duas cartas forem "A" o jogador devolve-as para o baralho e compra 2 novas cartas 
let cartasEmJogo = [...maoJogador]
let maoComputador = []
do {
    maoComputador = [puxar(cartasEmJogo)], maoComputador.push(puxar(cartasEmJogo.concat(maoComputador)))
    //cartasEmJogo = cartasEmJogo.concat(maoComputador)
    //maoComputador.push(puxar(cartasEmJogo.concat(maoComputador)))
} while (maoComputador[0].carta.includes('A') && maoComputador[1].carta.includes('A'))

cartasEmJogo = cartasEmJogo.concat(maoComputador)

for (let i = 0; i < 15; i++) {
    maoJogador.push(puxar(maoJogador, cartasEmJogo))
}

cartasEmJogo = maoJogador.concat(maoComputador)

for (let i = 0; i < 15; i++) {
    maoComputador.push(puxar(maoComputador, cartasEmJogo))
}

cartasEmJogo = maoComputador.concat(maoJogador)
console.log(cartasEmJogo, maoJogador, maoComputador)

/*var maoJogador = [
    { carta: '2♥️', valor: 2 },
    { carta: 'A♥️', valor: 11 },
    { carta: '3♥️', valor: 3 },
    { carta: '4♥️', valor: 4 },
    { carta: '5♥️', valor: 5 },
    { carta: '6♥️', valor: 6 },
    { carta: '7♥️', valor: 7 },
    { carta: '8♥️', valor: 8 },
    { carta: '9♥️', valor: 9 },
    { carta: '10♥️', valor: 10 },
    { carta: 'K♥️', valor: 10 },
    { carta: 'Q♥️', valor: 10 },
    { carta: 'J♥️', valor: 10 },
    { carta: '2♣️', valor: 2 },
    { carta: 'A♣️', valor: 11 },
    { carta: '3♣️', valor: 3 },
    { carta: '4♣️', valor: 4 },
    { carta: '5♣️', valor: 5 },
    { carta: '6♣️', valor: 6 },
    { carta: '7♣️', valor: 7 },
    { carta: '8♣️', valor: 8 },
    { carta: '9♣️', valor: 9 },
    { carta: '10♣️', valor: 10 },
    { carta: 'K♣️', valor: 10 },
    { carta: 'Q♣️', valor: 10 },
    { carta: 'J♣️', valor: 10 }
]


console.log(puxar(maoJogador))*/
