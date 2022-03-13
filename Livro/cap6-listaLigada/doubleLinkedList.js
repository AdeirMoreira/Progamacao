import { ListaLigada } from "./linkedlist.js";
import { defaultEquals } from "./util.js";
import { Node } from './models/linked-list-models.js'

class NodeDuplo extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}
class ListaLinkadaDupla extends ListaLigada {
    constructor(equalFn = defaultEquals) {
        super(equalFn)
        this.tail = undefined
    }
    push(element) {
        const node = new NodeDuplo(element)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.cont++
        return true
    }
    insert(element, index) {
        if (index >= 0 && index <= this.cont) {
            const node = new NodeDuplo(element)
            let atual = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = this.head
                    atual.prev = node
                    this.head = node
                }
            } else if (index === this.cont) {
                atual = this.tail
                atual.next = node
                node.prev = atual
                this.tail = node
            } else {
                const anterior = this.getElementIndex(index - 1)
                atual = anterior.next
                node.next = atual
                anterior.next = node
                atual.prev = node
                node.prev = anterior
            }
            this.cont++
            return true
        }
        console.log('Esse index é invalido, tente o método push')
    }
    remove(element) {
        if (this.indexOf(element) != -1) {
            const index = this.indexOf(element)
            return this.removeByIndex(index)
        } else {
            return undefined
        }
    }
    removeByIndex(index) {
        if (index >= 0 && index < this.cont) {
            let atual = this.head
            if (index === 0) {
                this.head = atual.next
                if (this.cont === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.cont - 1) {
                atual = this.tail
                this.tail = atual.prev
                this.tail.next = undefined
            } else {
                atual = this.getElementIndex(index)
                const anterior = atual.prev
                anterior.next = atual.next
                atual.next.prev = anterior
            }
            this.cont--
            return atual.element
        }
        return undefined
    }
    indexOf(element) {
        let atual = this.head
        let index = 0
        while (atual != null) {
            if (this.equalFn(element, atual.element)) {
                return index
            }
            index++
            atual = atual.next
        }
        return -1
    }
    getHead() {
        return this.head
    }
    getTail() {
        return this.tail
    }
    size() {
        return this.cont
    }
    isEmpty() {
        if (this.head == null && this.tail == null) {
            return true
        } else {
            return false
        }
    }
    clear() {
        this.head = undefined
        this.tail = undefined
        this.cont = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objStrig = `${this.head.element}`
        let atual = this.head.next
        while (atual != null) {
            objStrig += `, ${atual.element}`
            atual = atual.next
        }
        return objStrig
    }
    inverseToString() {
        if (this.isEmpty()) {
            return ''
        }
        let objStrig = `${this.tail.element}`
        let anterior = this.tail.prev
        while (anterior != null) {
            objStrig += `, ${anterior.element}`
            anterior = anterior.prev
        }
        return objStrig
    }
}
const trem = new ListaLinkadaDupla()
console.log(trem.isEmpty())
console.log(trem.size())
trem.push('GrowDev')
trem.push('GamaAcademy')
trem.push('Labenu')
trem.insert('Adeir', 10)
trem.push('kenzieAcademy')
trem.push('DigitalHouse')
trem.push('CubosAcademy')
trem.push('Trybe')
console.log(trem.toString())
trem.insert('ProgamadorBR', 1)
trem.insert('Undemy', 5)
trem.insert('Rocktseed', 3)

console.log(trem.isEmpty())
console.log(trem.size())
console.log(trem.toString())
trem.removeByIndex(1)
trem.removeByIndex(6)
trem.removeByIndex(0)
console.log(trem.toString())
console.log(trem.size())
console.log(trem.indexOf('Labenu'))
console.log(trem.indexOf('Rocketseed'))
console.log(trem.indexOf('CubosAcademy'))
console.log(trem.getHead())
console.log(trem.getTail())
console.log(trem.size())
trem.remove('Rocktseed')
trem.remove('Undemy')
trem.remove('Trybe')
console.log(trem.remove('Digital House'))
console.log(trem.size())
console.log(trem.toString())
console.log(trem.inverseToString())
trem.clear()
console.log(trem.isEmpty())
console.log(trem.size())
console.log(trem.toString())
