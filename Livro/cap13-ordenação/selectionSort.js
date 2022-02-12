import { Compare } from "../bau/classes úteis/class.js";
import { swap, defaultCompare } from "../bau/funções úteis/util.js";

function criarArrayTrasPFrente(size) {
    const array = []
    for (let i = size; i > 0; i--) {
        array.push(i)
    }
    return array
}

function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array
    let indexMin
    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.Maior_que) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin)
        }
    }
    return array
}

const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = criarArrayTrasPFrente(4)
console.log(i.join('-'))
console.log(selectionSort(i).join('-'))
console.log(j.join('-'))
console.log(selectionSort(j).join('-'))