import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare, defaultEquals, lesserOrEquals } from "../bau/funções úteis/util.js";
import quickSort from "./quickSort.js";

function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i
        }
    }
    return -1
}

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    let low = 0
    let higt = sortedArray.length - 1
    while (lesserOrEquals(low, higt, compareFn)) {
        const middle = Math.floor((low + higt) / 2)
        const element = sortedArray[middle]
        if (compareFn(element, value) === Compare.Menor_que) {
            low = middle + 1
        } else if (compareFn(element, value) === Compare.Maior_que) {
            higt = middle - 1
        } else {
            return middle
        }
    }
    return -1
}



const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
console.log(i.join('-'))
console.log(binarySearch(i, 250))