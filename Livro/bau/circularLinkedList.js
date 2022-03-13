import { Node } from "./ListaLigada/linked-list-models.js";
import { ListaLigada } from "./ListaLigada.js";
import { defaultEquals } from "./funções úteis/util.js";
export { CircularLikedList as ListaLinkadaCircular };


class CircularLikedList extends ListaLigada {
    constructor(equalFn = defaultEquals) {
        super(equalFn)
    }
    push(element) {
        const node = new Node(element)
        let atual
        if (this.head == null) {
            this.head = node
        } else {
            atual = this.getElementIndex(this.size() - 1)
            atual.next = node
        }
        node.next = this.head
        this.cont++
    }
    insert(element, index) {
        if (index >= 0 && index <= this.cont) {
            const node = new Node(element)
            let atual = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = atual
                    atual = this.getElementIndex(this.size())
                    this.head = node
                    atual.next = this.head
                }
            } else {
                const anterior = this.getElementIndex(index - 1)
                node.next = anterior.next
                anterior.next = node
            }
            this.cont++
            return true
        }
        console.log('Index inválido!')
    }
    removeIndex(index) {
        if (index >= 0 && index < this.cont) {
            let atual = this.head
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined
                } else {
                    let remivodo = this.head
                    atual = this.getElementIndex(this.size() - 1)
                    this.head = this.head.next
                    atual.next = this.head
                    atual = remivodo
                }
            } else {
                const anterior = this.getElementIndex(index - 1)
                atual = anterior.next
                anterior.next = atual.next
            }
            this.cont--
            return atual.element
        }
        console.log('Index inválido!')
    }
    toString() {
        if (this.isEmpty()) {
            return null
        }
        let objStrig = `${this.head.element}`
        let atual = this.head.next
        for (let i = 1; i < this.size() && atual != null; i++) {
            objStrig = `${objStrig}, ${atual.element}`
            atual = atual.next
        }
        return objStrig
    }
}


