export { Compare, parChaveValor, Node, BalanceFactor, BlackandWhiteNode, Colors }

const Compare = {
    Menor_que: -1,
    Maior_que: 1,
    Igual: 0
}
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UMBALANCED_LEFT: 5,
}
const Colors = {
    white: 0,
    grey: 1,
    black: 2
}
class parChaveValor {
    constructor(chave, valor) {
        this.chave = chave
        this.valor = valor
    }
    toString() {
        return `[#${this.chave}: ${this.valor}]`;
    }
}
class Node {
    constructor(chave) {
        this.chave = chave
        this.esquerda = null
        this.direita = null
    }
}
class BlackandWhiteNode extends Node {
    constructor(chave) {
        super(chave)
        this.color = Color.White
        this.parent = null
    }
    isWhite() {
        return this.color === Color.White
    }
}
