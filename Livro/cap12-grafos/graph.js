import dicionario from "../bau/dicio.js"
import Fila from "../bau/fila.js"
import { Colors } from "../bau/classes úteis/class.js"
import * as pilha from '../bau/stackArray.js'


class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new dicionario()
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    addEdge(v, e) {
        if (!this.adjList.hasKey(v)) {//ATENÇÃO!! DIFERNTE DO LIVRO
            this.addVertex(v)
        }
        if (!this.adjList.hasKey(e)) {//ATENÇÃO!! DIFERNTE DO LIVRO
            this.addVertex(e)
        }
        this.adjList.get(v).push(e)
        if (!this.isDirected) {
            this.adjList.get(e).push(v)
        }
    }
    getVertices() {
        return this.vertices
    }
    getAdjList() {
        return this.adjList
    }
    toString() {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]}`
            }
            s += '\n'
        }
        return s;
    }
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
    while (!fila.isEmpty()) {
        const u = fila.pop()
        const neighbors = adjList.get(u)
        color[u] = Colors.grey
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.white) {
                color[w] = Colors.grey
                fila.push(w)
            }
        }
        color[u] = Colors.black
        if (callback) { callback(u) }
    }
}

const BFS = (graph, starVertex) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = corInicial(vertices)
    const distances = {}
    const predecessors = {}
    const fila = new Fila()
    fila.push(starVertex)
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0
        predecessors[vertices[i]] = null
    }
    while (!fila.isEmpty()) {
        const u = fila.pop()
        const neighbors = adjList.get(u)
        color[u] = Colors.grey
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.white) {
                color[w] = Colors.grey
                distances[w] = distances[u] + 1
                predecessors[w] = u
                fila.push(w)
            }
        }
        color[u] = Colors.black
    }
    return { distances, predecessors }
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.toString())

const printVertex = (value) => console.log(`Vertice vizitado: ` + value)
breadthFirstSearch(graph, myVertices[0], printVertex)

const shortestPathA = BFS(graph, myVertices[0])
console.log(shortestPathA)

const fromVertex = myVertices[0]
for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i]
    const path = new pilha.Stack()
    for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        path.push(v)
    }
    path.push(fromVertex)
    let s = path.pop()
    while (!path.isEmpty()) {
        s += '-' + path.pop()
    }
    console.log(s)
}

const deptFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = corInicial(vertices)
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.white) {
            deptFirstSearchVisit(vertices[i], color, adjList, callback)
        }
    }
}

const deptFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.grey
    if (callback) { callback(u) }
    const arestas = adjList.get(u)
    for (let i = 0; i < arestas.length; i++) {
        const w = arestas[i]
        if (color[w === Colors.white]) {
            deptFirstSearchVisit(w, color, adjList, callback)
        }
    }
    color[u] = Colors.black
}
deptFirstSearch(graph, printVertex)

const DFS = graph => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = corInicial(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = { cont: 0 }
    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0
        d[vertices[i]] = 0
        p[vertices[i]] = null
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.white) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList)
        }
    }
    return { discovery: d, finished: f, predecessors: p }
}

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.grey
    d[u] = ++time.cont
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.white) {
            p[w] = u
            DFSVisit(w, color, d, f, p, time, adjList)
        }
    }
    color[u] = Colors.black
    f[u] = ++time.cont
}

const graaph = new Graph(true)
let myVerticess = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < myVerticess.length; i++) {
    graaph.addVertex(myVerticess[i])
}
graaph.addEdge('A', 'C')
graaph.addEdge('A', 'D')
graaph.addEdge('B', 'D')
graaph.addEdge('B', 'E')
graaph.addEdge('C', 'F')
graaph.addEdge('F', 'E')
const result = DFS(graaph)

const fTimes = result.finished
let s = ''
for (let count = 0; count < myVerticess.length; count++) {
    let max = 0
    let maxName = null
    for (let i = 0; i < myVerticess; i++) {
        if (fTimes[myVerticess[i]] > max) {
            max = fTimes[myVerticess[i]]
            maxName = myVerticess[i]
        }
    }
    s += "-" + maxName
    delete fTimes[maxName]
}
console.log(s)
