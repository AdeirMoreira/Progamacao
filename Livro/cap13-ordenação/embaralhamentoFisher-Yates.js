import { swap } from "../bau/funções úteis/util.js"

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randonIndex = Math.floor(Math.random() * (i + 1))
        swap(array, i, randonIndex)
    }
    return array
}

const test = [12, 15, 20, 25, 50, 72, 75, 80, 100]

console.log(embaralhar(test))
