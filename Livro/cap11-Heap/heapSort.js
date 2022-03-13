import { defaultCompare, swap } from "../bau/funções úteis/util.js";




function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn)
    }
    return array
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn)
    }
    return array
}

function heapify(array, index, heapSize, compareFn) {
    let maior = index
    const left = (2 * index) + 1
    const right = (2 * index) + 2
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
        maior = left
    }
    if (right < heapSize && compareFn(array[right], array[maior]) > 0) {
        maior = right
    }
    if (maior !== index) {
        swap(array, index, maior)
        heapify(array, maior, heapSize, compareFn)
    }
}
const array = [93, 52, 26, 35, 62, 54, 46, 58, 3, 14]
console.log(array)
console.log(heapSort(array))