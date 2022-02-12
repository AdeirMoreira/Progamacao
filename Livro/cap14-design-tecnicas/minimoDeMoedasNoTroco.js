function minCoinChange(coins, amount) {
    const cache = []
    const makeChange = (value) => {
        if (!value) {
            return []
        }
        if (cache[value]) {
            return cache[value]
        }
        let min = []
        let newMin
        let newAmount
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i]
            newAmount = value - coin
            if (newAmount >= 0) {
                newMin = makeChange(newAmount)
            }
            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin)
                //console.log(`O mínimo de moedas para ${amount} centavos é ${min} `)
            }
        }
        return (cache[value] = min)

    }
    return makeChange(amount)
}

const moedas = [1, 5, 10, 25, 50]
console.log(minCoinChange(moedas, 6))