import { Compare } from "../bau/ListaLigada.js/linked-list-models.js";
import { ListaLigada, defaultEquals } from "../bau/ListaLigada.js/ListaLigada.js";
import { defaultCompare } from "../bau/ListaLigada.js/util.js";

class SortLinkList extends ListaLigada {
    constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
        super(equalFn)
        this.compareFn = compareFn
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return super.insert(element, pos)
    }
    getIndexNextSortedElement(element) {
        let atual = this.head
        let i = 0
        for (; i < this.size() && atual; i++) {
            const comp = this.compareFn(element, atual.element)
            if (comp === Compare.Menor_que) {
                return i
            }
            atual = atual.next
        }
        return i
    }
}

const test = new SortLinkList()
test.insert('Josy')
test.insert('Emily')
test.insert('Marcele')
test.insert('Labenu')
test.insert('Bruna')
test.insert('Carol')
test.insert('Natália')
test.insert('Ana')
test.insert('Patricia')
test.insert('Bianca')
test.insert('Amy')
test.insert('Fernanda')
test.push(1994)
test.push('Adeir')
console.log(test.toString())
console.log(test.size())
console.log(test.indexOf('Adeir'))
test.removeIndex(12)
test.remove('Adeir')
console.log(test.toString())
console.log(test.isEmpty())
console.log(test.getHead())
test.toClear()
console.log(test.toString())