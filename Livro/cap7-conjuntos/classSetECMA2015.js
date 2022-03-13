const peitudas = new Set()
const gostosas = new Set()
peitudas.add('Josy')
peitudas.add('Marcele')
peitudas.add('Fernanda')
peitudas.add('Cinara')
gostosas.add('Flávia')
gostosas.add('Bárbara')
gostosas.add('Dayana')
gostosas.add('Josy')
const uniao = (peitudas, gostosas) => {
    const uniao1e2 = new Set()
    gostosas.forEach(element => uniao1e2.add(element));
    peitudas.forEach(element => uniao1e2.add(element))
    return uniao1e2
}

const intersecao = (gostosas, peitudas) => {
    const intersecao1e2 = new Set()
    peitudas.forEach(element => {
        if (gostosas.has(element)) {
            intersecao1e2.add(element)
        }
    })
    return intersecao1e2
}

const diferenca = (meloes, pudim) => {
    const diferenca1e2 = new Set()
    pudim.forEach(element => {
        if (!meloes.has(element)) {
            diferenca1e2.add(element)
        }
    })
    return diferenca1e2
}

console.log(uniao(peitudas, gostosas))
console.log(intersecao(peitudas, gostosas))
console.log(diferenca(gostosas, peitudas))
console.log('-----------------------------------------------------------------')
console.log(new Set([...gostosas, ...peitudas]))//União
console.log(new Set([...gostosas].filter(x => peitudas.has(x))))//Interseção
console.log(new Set([...gostosas].filter(x => !peitudas.has(x))))///Diferença

















