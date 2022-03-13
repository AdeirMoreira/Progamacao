function matrixChainOrden(p) {
    const n = p.length
    const m = []
    const s = []
    for (let l = 2; l < n; l++) {
        for (i = 1; i <= (n - l) + 1; i++) {
            const j = (i + l) - 1
            m[i][j] = Number.MAX_SAFE_INTEGER
            for (let k = i; k <= j - 1; k++) {
                const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j])
                if (q < m[i][j]) {
                    m[i][j] = q
                }
            }
        }
    }
    return m[1][n - 1]
}

function printOptimalParentsis(s, i, j) {
    if (i === j) {
        console.log('A[' + i + ']')
    } else {
        console.log('(')
        printOptimalParentsis(s, i, s[i][j])
        printOptimalParentsis(s, i[i][j] + 1, j)
        console.log(')')
    }
}

const s = []
for (let i = 0; i <= n; i++) {
    s[i] = []
    for (let j = 0; j <= n; j++) {
        s[i][j] = 0
    }
}

//`W` é o peso que a mochila pode carregar