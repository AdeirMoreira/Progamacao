let array = [0]
function criaarray(paramentro) {
    for (let i = 1; i <= paramentro; i++) {
        array[i] = i
    }
}
criaarray(20)
console.log(array.toString(array))
array.reverse()
console.log(array.toString(array))
array.sort()
console.log(array.toString(array))
array.sort((a, b) => a - b)
console.log(array.toString(array))

console.log('------------------------------------------------------')

let famlia = [
    { nome: 'Piedade', idade: 59 },
    { nome: 'Aninha', idade: 11 },
    { nome: 'Suelli', idade: 41 },
    { nome: 'Alessandro', idade: 21 },
    { nome: 'Nátalia', idade: 35 },
]
function coparefamilia(a, b) {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
}
console.log(famlia.sort(coparefamilia));

console.log('------------------------------------------------------')

let nomes = Array.of('Adeir', 'dezinho', 'alessandro', 'Leandro', 'piedade', 'Naná', 'Cleusa')
console.log(nomes.toString(nomes.sort()))
console.log(nomes.toString(nomes.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
})))