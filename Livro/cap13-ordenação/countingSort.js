function countingSort(array) {
    if (array.length < 2) {
        return array
    }
    const maxValue = findMaxValue(array)
    const counts = new Array(maxValue + 1)
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0
        }
        counts[element]++
    });
    let sortedIndex = 0
    counts.forEach((countsElement, countsIndex) => {//countsElement é quantas vezes o elemento apararece
        while (countsElement > 0) {//countsindex é o valor do array original, eles estão ordenados nesse array
            array[sortedIndex++] = countsIndex
            countsElement--
        }
    })
    return array
}

function findMaxValue(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
console.log(i.join('-'))
console.log(countingSort(i).join('-'))