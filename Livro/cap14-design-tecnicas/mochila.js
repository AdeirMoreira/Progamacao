function knapSack(capacity, weights, values, n) {
    const ks = []
    for (let i = 0; i <= n; i++) {
        ks[i] = []
    }
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                ks[i][w] = 0
            } else if (weights[i - 1] <= w) {
                const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
                const b = ks[i - 1][w]
                ks[i][w] = a > b ? a : b
            } else {
                ks[i][w] = ks[i - 1][w]
            }
        }
    }
    findValues(n, capacity, ks, weights, values)
    return `O valor total de itens na mochila é: ${ks[n][capacity]}`
}

function findValues(n, capacity, ks, weights, values) {
    let i = n
    let k = capacity
    console.log(`Itens que fazer parte da solução:`)
    while (i > 0 && k > 0) {
        if (ks[i][k] !== ks[i - 1][k]) {
            console.log(`item${i} pode ser parte da solução w,v: ${weights[i - 1]}, ${values[i - 1]}`)
            i--
            k -= ks[i][k]
        } else {
            i--
        }
    }
}

const values = [3, 4, 5]
let weights = [2, 3, 4]
let capacity = 5
let n = values.length
console.log(knapSack(capacity, weights, values, n))

//`W` é o peso que a mochila pode carregar