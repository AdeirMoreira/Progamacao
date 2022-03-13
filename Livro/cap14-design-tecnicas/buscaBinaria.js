import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare } from "../bau/funções úteis/util.js";
import quickSort from "../cap13-ordenação/quickSort.js";

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    const low = 0
    const high = sortedArray.length - 1
    return binarySearchRecursice(array, value, low, high, compareFn)
}

function binarySearchRecursice(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = array[mid]
        if (compareFn(element, value) === Compare.Menor_que) {
            return binarySearchRecursice(array, value, mid + 1, high, compareFn)
        } else if (compareFn(element, value) === Compare.Maior_que) {
            return binarySearchRecursice(array, value, low, mid - 1, compareFn)
        } else {
            return mid
        }
    }
    return -1
}

const i = [12, 16, 6, 21, 5, 1, 50, 28, 37, 30]
const j = quickSort(i)
console.log(binarySearch(j, 22))
