import { defaultEquals } from "./util.js";
import { Node } from "./models/linked-list-models.js";
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
        return undefined
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
        return undefined
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
    isEmpty() {
        return this.size() === 0
    }
    getHead() {
        return this.head
    }
    toString() {
        if (this.isEmpty()) {
            return ``
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
export { LinkedList as ListaLigada }

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.size())

list.push('HTML')
list.push('CSS')
list.push('JavaScript')
list.push('React')
list.push('Jest')
list.push('NodeJs')
list.push('TypeScript')
list.push('MySQL')
list.push('AWS')
list.push('Firebase')

console.log(list.isEmpty())
console.log(list.size())
console.log(list.getHead())
console.log(list.toString())
console.log(list.indexOf('MySQL'))
console.log(list.indexOf('Angular'))
console.log(list.indexOf('Firebase'))
console.log(list.indexOf('JavaScript'))
console.log(list.getElementByIndex(1))
console.log(list.getElementByIndex(4))
console.log(list.getElementByIndex(7))
console.log(list.getElementByIndex(12))
console.log(list.getElementByIndex(0))
console.log(list.getElementByIndex(20))
list.push('LABENU')
console.log(list.toString())
list.insert('KENZIE ACADEMY', 9)
list.insert('CUBOS ACADEMY', 13)
console.log(list.toString())
list.remove('Firebase')
console.log(list.toString())
list.remove('Firebase')
console.log(list.toString())
list.removeIndex(0)
list.removeIndex(5)
list.removeIndex(8)
list.removeIndex(20)
console.log(list.toString()) 