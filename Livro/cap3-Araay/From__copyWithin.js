let array = []
function criaarray(parametro) {
    for (let i = 0; i <= parametro; i++) {
        array[i] = i * i

    }
}
criaarray(5)
console.log(array)
console.log('----------------------------')
let array2 = Array.from(array)// Método que copia o array dentro da função 
array2 = Array.from(array2, value => value % 2 == 0 ? 'Par' : 'Impar')// copiou o valor do array, além executar a função  
console.log(array2)
console.log('--------------------------------------------------------')
let array3 = Array.of(...array)//Meétido que cria um array usado argumento. Aqui o array foi pareado
console.log(array3)
console.log('--------------------------------------------------------')
let array4 = array3
array4.fill(undefined) //Método que determina todos os elementos do array4. Aqui foi setado 'undefined'
console.log(array4)
array4.fill(7, 2)//O 1° paramentro determina o valor e o 2° determina o indide apartir do qual o valor vai ser setado
console.log(array4)
array4.fill(NaN, 1, 4)//O 3 paramentro determina o até que indice o valor vai ser setado (não inclusivo)
console.log(array4)
console.log('--------------------------------------------------------')
let Uns = Array(10).fill(1)// Cria um array com 10 posições e seta 1 para todos o valores
console.log(Uns)
console.log('--------------------------------------------------------')
let array5 = Array.from(array)
array5.copyWithin(0, 3, 6)//1° paramentro especifica apartir de qual indice fica a cópia. 2° e 3° onde começa e onde termina o indice da cópia.
console.log(array5)


