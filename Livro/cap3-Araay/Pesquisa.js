let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(array.indexOf(10));
console.log(array.indexOf(100))
array.push(10)
console.log(array.lastIndexOf(10))
console.log(array.lastIndexOf(100))
function multiplode5(elemento, index, array) {
    return (elemento % 5 == 0)
}
console.log(array.find(multiplode5))// retorno o primeiro valor que corresponde a função 
console.log(array.findIndex(multiplode5))// retorna o indice do primeiro valor que corresponde a função 
console.log(array.includes(10))// procura por um valor no array e retorna 'true' se encontrar ou 'false' se não encontrar
console.log(array.includes(10, 13))//O 1° paramentro espeficifa apartir do indice o qual deve se iniciar a busca
console.log(array.includes(20))// procura por um valor no array e retorna 'true' se encontrar ou 'false' se não encontrar
let arrayString = array.toString()
console.log(arrayString)
arrayString = array.join('-')
console.log(arrayString)
