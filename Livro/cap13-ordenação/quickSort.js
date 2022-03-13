import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare, swap } from "../bau/funções úteis/util.js";

export default function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn)
}

function quick(array, left, right, compareFn) {
    let index
    if (array.length > 1) {
        index = partition(array, left, right, compareFn)
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }
        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}

function partition(array, left, rigth, compareFn) {
    const pivot = array[Math.floor((rigth + left) / 2)]
    let i = left
    let j = rigth
    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.Menor_que) {
            i++
        }
        while (compareFn(array[j], pivot) === Compare.Maior_que) {
            j--
        }
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}

//const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
//const j = [12, 6, 18, 3]
//console.log(quickSort(i))