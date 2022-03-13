import { Deque } from "./deque.js";//export ////NÃO SE ESQUEÇA DO >>.js<<
const deque = new Deque
deque.addfront('Adeir')
deque.addBack('Marcele')
deque.isEmpty()

import Fila from "./fila.js";//export default ////NÃO SE ESQUEÇA DO >>.js<<
const fila = new Fila()
fila.push('Adeir')
fila.push('Fernanda')
console.log(fila.toString())

import * as pilhaARY from "./stackArray.js"//NÃO SE ESQUEÇA DO >>.js<<
const Pilha = new pilhaARY.Stack()
Pilha.push('Red Dead 2')
Pilha.push('Skyrim')
console.log(Pilha.peek())

import { pilhaOBJ } from "./stackObj.js";//NÃO SE ESQUEÇA DO >>.js<<
const pilha2 = new pilhaOBJ()
pilha2.push('Final Fantasy XV')
pilha2.push('The Wicher 3 ')
pilha2.push('Far Cry 5')
console.log(`${pilha2.toString()}`)

import { ListaLigada } from "./ListaLigada.js";//NÃO SE ESQUEÇA DO >>.js<<
const lista = new ListaLigada()
console.log(lista.isEmpty())
lista.push('Atlético-MG')
console.log(lista.toString())

import ListaLinkadaDupla from "./doubleLinkesList.js";//export default
const trem = new ListaLinkadaDupla()
trem.push('Adeir')
console.log(trem.toString())
console.log(trem.isEmpty())

import { ListaLinkadaCircular } from "./circularLinkedList.js";
const listaCircular = new ListaLinkadaCircular()
listaCircular.insert('Steam', 0)
console.log(listaCircular.toString())

import { ListaLinkadaOrdenada } from "./SortLinkList.js";
const test = new ListaLinkadaOrdenada()
test.insert('Josy')
test.insert('Marcele')
test.insert('Fernanda')
console.log(test.toString())

import Set from "./classSet.js";
const set = new Set()
set.add(12)
set.add('Adeir')
console.log(set.values())

import { conjunto } from "./conjuntos.js";
const conj1 = new conjunto()
conj1.add('Adeir')
const conj2 = new conjunto()
conj2.add('Marcele')
const uniao1e2 = conj1.uniao(conj2)
console.log(uniao1e2.values())

import dicionario from "./dicio.js";
const emails = new dicionario()
emails.set('Geralt', 'geraltOfRivia@gmail.com')
console.log(`O email de Geralt esta cadastrado? ${emails.hasKey('Geralt')}`)
console.log(`O email de Ciri esta cadastrado? ${emails.hasKey('Ciri')}`)
console.log(emails.String())

import { tabelaHash } from "./hashtable.js";
const GoT = new tabelaHash()
GoT.put('Margaery', 'Casa Tyrell')
GoT.put('Daenerys', 'Casa Targaryen')
GoT.put('Sansa', 'Casa Stark')
console.log(GoT.hashCode('Daenerys') + ` Daenerys da ${GoT.get('Daenerys')}`)
console.log(GoT.hashCode('Sansa') + ` Sansa da ${GoT.get('Sansa')}`)
console.log(GoT.hashCode('Margaery') + ` Margaery da ${GoT.get('Margaery')}`)
console.log(GoT.toString())

import { tabelaHashEncadeamentoSeparado } from "./hashTableEncadeamentoSeparado.js";
const GameOfThrones = new tabelaHashEncadeamentoSeparado()
GameOfThrones.put('Margaery', 'Casa Tyrell')
GameOfThrones.put('Daenerys', 'Casa Targaryen')
GameOfThrones.put('Sansa', 'Casa Stark')
console.log(GameOfThrones.hashCode('Daenerys') + ` Daenerys da ${GameOfThrones.get('Daenerys')}`)
console.log(GameOfThrones.hashCode('Sansa') + ` Sansa da ${GameOfThrones.get('Sansa')}`)
console.log(GameOfThrones.hashCode('Margaery') + ` Margaery da ${GameOfThrones.get('Margaery')}`)
console.log(GameOfThrones.toString())
