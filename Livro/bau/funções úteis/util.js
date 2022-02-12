import { Compare } from "../classes úteis/class.js"


export {
    defaultEquals, defaultCompare, defaultToString, HashCodeDJB2, fatorialrecursivo, fibonatiRecursivo,
    swap, reverseCompare, lesserOrEquals, biggerOrEquals, defaultDiff, embaralhar
}

function defaultEquals(a, b) {
    return a === b
}

function defaultCompare(a, b) {
    if (a === b) {
        return 0
    }
    return a < b ? Compare.Menor_que : Compare.Maior_que//Se a < b ENTAO(?) retorne Compare.Menor_que(-1) SENAO retorne Compare.Maior_que
}

function reverseCompare(compareFn) { return (a, b) => compareFn(b, a) }

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]]

function defaultToString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString()
}
//Função que devolve qualquer paramentro recebido em forma de string

function HashCodeDJB2(key) {
    const chaveHash = defaultToString(key)
    let hash = 5381
    for (let i = 0; i < chaveHash.length; i++) {
        hash = (hash * 33) + chaveHash.charCodeAt(i)
    }
    return hash % 1013
}
//Função Hash que transforma uma Key em um Chave Numérica

function fatorialrecursivo(numero) {
    if (numero === 1 || numero === 0) {
        return 1
    }
    return numero * fatorialrecursivo(numero - 1);
}

function fibonatiRecursivo(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonatiRecursivo(n - 1) + fibonatiRecursivo(n - 2)
}


const corInicial = vertices => {
    const visited = {}
    for (let i = 0; i < vertices.length; i++) {
        visited[vertices[i]] = Colors.white
    }
    return visited
}
const breadthFirstSearch = (graph, starVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = corInicial(vertices)
    const fila = new Fila()
    fila.push(starVertex)

}

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.Menor_que || comp === Compare.Igual
}

function biggerOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.Maior_que || comp === Compare.Igual
}


function defaultDiff(a, b) {
    return Number(a) - Number(b)
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randonIndex = Math.floor(Math.random() * (i + 1))
        swap(array, i, randonIndex)
    }
    return array
}