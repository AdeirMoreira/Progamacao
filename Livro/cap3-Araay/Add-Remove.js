let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numero[numero.length] = 10 //Length referencia sempre o próximo eletro depois do último pois o indice começa com 0
numero.push(11, 12, 13)//Adiciona o elemto a última posição do array
Array.prototype.InserirnaPrimeiraPosicao = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }
    this[0] = value
}
numero.InserirnaPrimeiraPosicao(-1)//desloca todos para a direita e adiciona ao indice 0
console.log(numero)
numero.unshift(-3, -2)// Adiciona no Inicio do Array
console.log(numero)
console.log('========================================================')

numero.shift()//Remove o PRIMEIRO elementos do Aarry
console.log(numero)
numero.pop()// Remove o ÚLTIMO elementos do Array
console.log(numero)
numero.splice(0, 2)// Especifica que será apartir do indice 0. E que serão removidos 2 elementos 
console.log(numero)
numero.splice(10, 3)// Especifica que será apartir do indice 10. E que serão removidos 3 elementos
console.log(numero)
numero.splice(0, 0, -3, -2, -1)// Especifica que sera apartir do indice 0. E que serão removidos 0 elementos. Os números -3,-2,-1 serão adicionados
console.log(numero)
numero.splice(13, 0, 10, 11, 12)// Especifica que sera apartir do indice 13. E que serão removidos 0 elementos. Os números 10,11,12 serão adicionados
console.log(numero)