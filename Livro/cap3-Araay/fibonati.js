let diasdaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
console.log(diasdaSemana)
console.log(diasdaSemana.length)
console.log(diasdaSemana[5])
console.log('===================================================')
let fibonati = []
fibonati[0] = 0
fibonati[1] = 1
for (let i = 2; i <= 102; i++) {
    fibonati[i] = fibonati[i - 1] + fibonati[i - 2];
}
for (let ii = 0; fibonati.length > ii; ii++) {
    console.log(`Fibonati posição ${ii}° = ${fibonati[ii]}`)

}