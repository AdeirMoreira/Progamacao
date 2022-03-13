let megaSena = []
megaSena[0] = []
megaSena[0][0] = 12
megaSena[0][1] = 15
megaSena[0][2] = 23
megaSena[0][3] = 32
megaSena[0][4] = 33
megaSena[0][5] = 46
megaSena[1] = []
megaSena[1][0] = 5
megaSena[1][1] = 17
megaSena[1][2] = 38
megaSena[1][3] = 43
megaSena[1][4] = 55
megaSena[1][5] = 57
console.log(megaSena)
console.log('--------------------------------------------------------------')
function escreverMatriz(minhamatriz) {
    for (let i = 0; i < minhamatriz.length; i++) {
        for (ii = 0; ii < minhamatriz[i].length; ii++) {
            console.log(minhamatriz[i][ii])
        }
    }
}
escreverMatriz(megaSena);
console.log('----------------------------------------------------------')
console.table(megaSena);