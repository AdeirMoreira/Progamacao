import { defaultCompare } from "../bau/funções úteis/util.js";
import { Compare } from "../bau/classes úteis/class.js";

function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array
        const meio = Math.floor(length / 2)
        const left = mergeSort(array.slice(0, meio), compareFn)
        const right = mergeSort(array.slice(meio, length), compareFn)
        array = merge(left, right, compareFn)
    }
    return array
}

function merge(left, right, compareFn) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(compareFn(left[i], right[j]) === Compare.Menor_que ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
console.log(mergeSort(j))
