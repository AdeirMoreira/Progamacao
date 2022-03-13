import { defaultEquals } from "./funções úteis/util.js"
import { Node } from "./ListaLigada/linked-list-models.js"
//import { defaultEquals } from './util.js.js'
//import { Node } from './linked-list-models.js'
export { LinkedList as ListaLigada }

class LinkedList {
    constructor(equalFn = defaultEquals) {
        this.cont = 0
        this.head = undefined
        this.equalFn = equalFn
    }
    push(element) {
        const node = new Node(element)
        let atual
        if (this.head == null) {
            this.head = node
        }
        else {
            atual = this.head
            while (atual.next != null) {
                atual = atual.next
            }
            atual.next = node
        }
        this.cont++
    }
    removeIndex(index) {
        if (index >= 0 && index < this.cont) {
            let atual = this.head
            if (index === 0) {
                this.head = atual.next
            } else {
                let anterior = this.getElementIndex(index - 1)
                atual = anterior.next
                anterior.next = atual.next
            }
            this.cont--
            return atual.element
        }
        return undefined
    }
    getElementIndex(index) {
        if (index >= 0 && index <= this.cont) {
            let atual = this.head
            for (let i = 0; i < index && atual != null; i++) {
                atual = atual.next
            }
            return atual
        }
        return undefined
    }
    getElementByIndex(index) {
        if (this.getElementIndex(index) != undefined) {
            let res = this.getElementIndex(index)
            return res.element
        }
        return 'Index inválido'
    }
    insert(element, index) {
        if (index >= 0 && index <= this.cont) {
            const node = new Node(element)
            if (index === 0) {
                node.next = this.head
                this.head = node
            } else {
                const anterior = this.getElementIndex(index - 1)
                const atual = anterior.next
                node.next = atual
                anterior.next = node
            }
            this.cont++
            return true
        }
        return false
    }
    indexOf(element) {
        let atual = this.head
        for (let i = 0; i < this.cont && atual != null; i++) {
            if (this.equalFn(element, atual.element)) {
                return i
            }
            atual = atual.next
        }
        return -1
    }
    remove(element) {
        const index = this.indexOf(element)
        return this.removeIndex(index)
    }
    size() {
        return this.cont
    }
    toClear() {
        this.head = undefined
        this.cont = 0
    }
    isEmpty() {
        return this.size() === 0
    }
    getHead() {
        return this.head
    }
    toString() {
        if (this.isEmpty()) {
            return null
        }
        let objStrig = `${this.head.element}`
        let atual = this.head.next
        for (let i = 0; i < this.size() && atual != null; i++) {
            objStrig += `, ${atual.element}`
            atual = atual.next
        }
        return objStrig
    }

}
