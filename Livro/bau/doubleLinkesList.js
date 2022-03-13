import { ListaLigada } from "./ListaLigada.js";
import { defaultEquals } from "./funções úteis/util.js";
import { NodeDuplo } from "./ListaLigada/linked-list-models.js";


export default class ListaLinkadaDupla extends ListaLigada {
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




