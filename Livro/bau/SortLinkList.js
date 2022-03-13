import { Compare } from "./classes úteis/class.js"
import { ListaLigada } from "./ListaLigada.js"
import { defaultCompare, defaultEquals } from "./funções úteis/util.js"


export { SortLinkList as ListaLinkadaOrdenada }

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
