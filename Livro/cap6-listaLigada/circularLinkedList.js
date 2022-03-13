import { defaultEquals, ListaLigada, Node } from "../bau/ListaLigada.js/ListaLigada.js";


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

const listaCircular = new CircularLikedList()

listaCircular.insert('Steam', 0)
console.log(listaCircular.toString())
listaCircular.removeIndex(0)
console.log(listaCircular.toString())
listaCircular.push('Steam')
listaCircular.insert('Epic', 0)
listaCircular.push('GOG Galaxy')
listaCircular.insert('Origin', 1)
listaCircular.insert('Discord', 3)
listaCircular.push('Kodi')
listaCircular.push(12121994)
console.log(listaCircular.toString())
listaCircular.removeIndex(0)
listaCircular.removeIndex(1)
listaCircular.removeIndex(2)
console.log(listaCircular.toString())
listaCircular.remove(12121994)
console.log(listaCircular.toString())
listaCircular.toClear()
console.log(listaCircular.isEmpty())
console.log(listaCircular.size())
console.log(listaCircular.getHead())
console.log(listaCircular.getElementByIndex(0))
console.log(listaCircular.getElementIndex(0))
console.log('==========================================')
listaCircular.insert('Steam', 0)
console.log(listaCircular.toString())
listaCircular.removeIndex(0)
console.log(listaCircular.toString())
listaCircular.push('Steam')
listaCircular.insert('Epic', 0)
listaCircular.push('GOG Galaxy')
listaCircular.insert('Origin', 1)
listaCircular.insert('Discord', 3)
listaCircular.push('Kodi')
listaCircular.push(12121994)
console.log(listaCircular.toString())
console.log(listaCircular.getHead())
console.log(listaCircular.getElementByIndex(15))
console.log(listaCircular.getElementByIndex(5))
console.log(listaCircular.getElementByIndex(0))
console.log(listaCircular.getElementByIndex(3))
console.log(listaCircular.getElementIndex(6))
console.log(listaCircular.getElementIndex(7))
console.log(listaCircular.getElementIndex(8))
console.log(listaCircular.indexOf('Steam'))
console.log(listaCircular.indexOf('Epic'))
console.log(listaCircular.indexOf(12121994))
console.log(listaCircular.indexOf('Discord'))
console.log(listaCircular.indexOf('GOG'))
console.log(listaCircular.indexOf('Origin'))
console.log(listaCircular.indexOf('Kodi'))
console.log(listaCircular.indexOf('GOG Galaxy'))



