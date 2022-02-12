import { defaultCompare, reverseCompare } from "../bau/funções úteis/util.js";
import minHeap from "./miniHeap.js";

export default class maxHeap extends minHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }
}

const max = new maxHeap()
max.insert(2)
max.insert(3)
max.insert(50)
max.insert(4)
max.insert(1)
console.log(max.size())
console.log(max.FindMinimum())