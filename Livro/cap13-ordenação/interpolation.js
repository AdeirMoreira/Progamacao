import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare, defaultDiff, defaultEquals, biggerOrEquals, lesserOrEquals } from "../bau/funções úteis/util.js";
import bucketSort from "./bucketSort.js";

function interpolationSearch(array, value, compareFn = defaultCompare, equalsFn = defaultEquals, diffFn = defaultDiff) {
    const { length } = array
    let low = 0
    let high = length - 1
    let position = -1
    let delta = -1
    while (
        low <= high && biggerOrEquals(value, array[low], compareFn) && lesserOrEquals(value, array[high], compareFn)
    ) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
        position = low + Math.floor((high - low) * delta)
        if (equalsFn(array[position], value)) {
            return position
        }
        if (compareFn(array[position], value) === Compare.Menor_que) {
            low = position + 1
        } else {
            high = position - 1
        }
    }
    return -1
}

const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
const k = bucketSort(i)
console.log(i.join('-'))
console.log(k.join('-'))
console.log(interpolationSearch(k, 21))
