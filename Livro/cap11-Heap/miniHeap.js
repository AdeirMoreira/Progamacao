import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare, swap } from "../bau/funções úteis/util.js";

export default class minHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getPaiIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2)
    }
    insert(value) {
        if (value != null) {
            this.heap.push(value)
            this.siftUp(this.heap.length - 1)//(this.heap.indexOf(value))
            return true
        }
        return false
    }
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift()
        }
        const removedValue = this.heap.shift()
        this.siftDown(0)
        return removedValue
    }
    siftUp(index) {
        let pai = this.getPaiIndex(index)
        while (index > 0 && this.compareFn(this.heap[pai], this.heap[index]) === Compare.Maior_que) {
            swap(this.heap, pai, index);
            index = pai;
            pai = this.getPaiIndex(index);
        }
    }
    siftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.Maior_que) {
            element = left
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.Maior_que) {
            element = right
        }
        if (index != element) {
            swap(this.heap, index, element);
            this.siftDown(element)
        }
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    FindMinimum() {
        return this.isEmpty() ? 'Vazio' : this.heap[0]
    }

}
/*
const heap = new minHeap()
heap.insert(2)
heap.insert(4)
heap.insert(5)
heap.insert(3)
heap.insert(8)
heap.insert(6)
heap.insert(10)
heap.insert(7)
heap.insert(1)
heap.insert(9)
console.log(heap.heap)
console.log(heap.size())
console.log(heap.isEmpty())
console.log(heap.FindMinimum())
heap.extract()
*/