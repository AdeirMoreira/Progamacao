function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array
    }
    function minimo(array) {
        let min = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min
    }
    function maximo(array) {
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
    let minValue = minimo(array)
    let maxValue = maximo(array)
    let significantDigit = 1
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
    }
    return array
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    let buckets = []
    const aux = []
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        buckets[bucketsIndex]++
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        aux[--buckets[bucketsIndex]] = array[i]
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i]
    }
    return array
}

const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
//console.log(i.join('-'))
console.log(radixSort(i).join('-'))
