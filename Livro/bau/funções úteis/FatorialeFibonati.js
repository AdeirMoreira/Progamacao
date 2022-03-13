function fatorial(numero) {
    let result = 1
    if (numero < 0) {
        return undefined
    }
    for (let k = numero; k > 1; k--) {
        if (k === numero) {
            result = k
        } else {
            result = result * k
        }
    }
    return result
}
//console.log(fatorial(0))

function fatorialrecursivo(numero) {
    if (numero === 1 || numero === 0) {
        return 1
    }
    return numero * fatorialrecursivo(numero - 1);
}
//console.log(fatorialrecursivo(3))

function fibinati(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    let fb1 = 0
    let fb2 = 1
    let fibo = n
    for (let i = 2; i <= n; i++) {
        fibo = fb1 + fb2
        fb1 = fb2
        fb2 = fibo
    }
    return fibo
}
//console.log(fibinati(3))

function fibonatiRecursivo(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonatiRecursivo(n - 1) + fibonatiRecursivo(n - 2)
}

//console.log(fibonatiRecursivo(3))

function fibonatiMemorirization(n) {
    const memo = [0, 1]
    const fibonati = (n) => {
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonati(n - 1, memo) + fibonati(n - 2, memo);
    }
    return fibonati(n)
}

//console.log(fibonatiMemorirization(25))
