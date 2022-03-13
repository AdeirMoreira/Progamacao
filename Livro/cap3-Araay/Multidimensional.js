const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []
    for (let ii = 0; ii < 3; ii++) {
        matrix3x3x3[i][ii] = []
        for (let iii = 0; iii < 3; iii++) {
            matrix3x3x3[i][ii][iii] = i + ii + iii
        }
    }
}
console.table(matrix3x3x3)
console.log('-----------------------------------------------------')
function escrevermatriz() {
    for (let a = 0; a < 3; a++) {
        matrix3x3x3[a] = []
        for (let b = 0; b < 3; b++) {
            matrix3x3x3[a][b] = []
            for (let c = 0; c < 3; c++) {
                matrix3x3x3[a][b][c] = a + b + c
                console.log(matrix3x3x3[a][b][c])
            }
        }
    }
}
escrevermatriz()