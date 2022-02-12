var array = []
function criaarray(value) {
    for (let i = 0; i <= value; i++) {
        array[i] = i
    }
}
criaarray(10)
//console.log(array)
function parouimpar(x) {
    console.log(x);
    return x % 2 === 0 ? true : false // Função seta com apenas 1 paramentro
}
function parouimpar2(value) {
    console.log(value)
    return value % 2 == 0
}
const parouimpar3 = z => z % 2 === 0 ? true : false // Função seta com apenas 1 parametro (Ápos o => é o que ficaria dentro dos {})

console.log(array.every(parouimpar))
// 'every' testa os valores do array ate que o resultado da condição seja 'False'
console.log(array.some(parouimpar2))
console.log(array.some(parouimpar3))
// 'some' testa os valores do array ate que o resultado da condição seja 'true'
array.forEach(x => console.log(x % 2 === 0 ? true : false))//Função seta com apenas 1 parametro (Ápos o => é o que ficaria dentro dos {})
// 'For Each' testa todos os valores do arrya para a condição 
console.log(array.map(parouimpar3))
//'map' develve um novo array com todos os resultados da condição testada em todos o elemento do array original 
console.log(array.filter(parouimpar3))
//'filer' devolve um novo array com os elementos para os quais a condicional resultou 'true'
console.log(array.reduce((previous, current) => previous + current))
//'recuce' faz alguma operação com o elemtos em sequencia do array exp= 1+2+3+4...
let pares = []
let impares = []
for (const n of array) {//'For of' testa todos o elementos do array, semelhante ao 'for in'
    if (n % 2 === 0) {
        pares.push(n)
    } else {
        impares.push(n)
    }
}
console.log(impares)
console.log(pares)