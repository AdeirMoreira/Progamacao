import insertSort from "./Insertion.js";


export default function bucketSort(array, bucketSize = 5) {
    if (array.lenght < 2) {
        return array
    }
    const buckets = createBuckets(array, bucketSize)
    return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) {
    let minValue = array[0]
    let maxValue = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
        } else if (array[i] > maxValue) {
            maxValue = array[i]
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    const buckets = []
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(array[i])
    }
    return buckets
}

function sortBuckets(buckets) {
    const sortedArray = []
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertSort(buckets[i])
            sortedArray.push(...buckets[i])
        }
    }
    return sortedArray
}

//const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
//const j = [12, 6, 18, 3]
//console.log(i.join('-'))
//console.log(bucketSort(i).join('-'))