import { Compare } from "../bau/classes úteis/class.js";
import { defaultCompare } from "../bau/funções úteis/util.js";

export default function insertSort(array, compareFn = defaultCompare) {
    const { length } = array
    let temp
    for (let i = 1; i < length; i++) {
        let aux = i
        temp = array[i]
        while (aux > 0 && compareFn(array[aux - 1], temp) === Compare.Maior_que) {
            array[aux] = array[aux - 1]
            aux--
        }
        array[aux] = temp
    }
    return array
}
/*
const i = [50, 25, 75, 15, 100, 20, 80, 12, 72]
const j = [12, 6, 18, 3]
console.log(insertSort(i))
*/
