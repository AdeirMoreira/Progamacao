import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare, swap } from "../bau/funções úteis/util.js";

function criarArrayTrasPFrente(size) {
    const array = []
    for (let i = size; i > 0; i--) {
        array.push(i)
    }
    return array
}

function bubleSort(array, compareFn = defaultCompare) {
    const { length } = array//A variável recebeu {length} recebeu o Length do array paramentro
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.Maior_que) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

function bubleSortMelhorado(array, compareFn = defaultCompare) {
    const { length } = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.Maior_que) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

const i = criarArrayTrasPFrente(10)
const j = criarArrayTrasPFrente(5)
console.log(i.join("-"))
console.log(bubleSort(i).join('-'))
console.log(j.join("-"))
console.log(bubleSortMelhorado(j).join('-'))