const array = [1, 2, 3, 4, 5]
const soma = (primeiro, segundo) => primeiro + segundo
let resultado = array.reduce(soma/*valor atual*/)
console.log(resultado)
//A função soma o 1° valor ao 2° valor, depois pega o resultado e soma ao 3° valor, depois o resultado ao 4° valor...
console.log(array.reduce(soma, -5))
//O 1° parametro do metodo reduce é a função redutora, o 2° parametro é o valor inicial que o acumulador começará.
//O 1° valor é somado ao acumulador, o 2° valor é somado ao acumulador atualizador. 3° valor + acumulador atualizado...

console.log([1, 2, 3, 4, 5].reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual
}))
//Um exemplo do método funcionando para cada elemento do array. >> Os paramentros index e array ajudaram a visualizar 
console.log([1, 2, 3, 4, 5].reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual
}, -5))
// Aqui um valor atual foi passado, então o acumulador começará com esse valor e soma começará apartir do elemento de indice 0

//OBJETOS

const nome = {
    Nome: 'Adeir',
    nomedoMeio: 'Moreira',
    Sobrenome: 'Maia'
}

const Nome = []
Nome.push(nome.Nome)
Nome.push(nome.nomedoMeio)
Nome.push(nome.Sobrenome)

console.log(Nome.reduce((acumulador, valorAtual) => {
    return acumulador + ' ' + valorAtual
}))

//JUNTAR ARRAYS

let reduzido = [[0, 1], [2, 3], [4, 5]].reduce((acumulador, valorAtual) => {
    return acumulador.concat(valorAtual)
}, [])
console.log(reduzido)

// Quantidade de nomes 

let nomes = ['Adeir', 'Alessandro', 'Leandro', 'Adeir', 'Anderson', 'Giberto', 'Leandro', 'Adeir']
let quantidaDedeNomes = nomes.reduce((todosNomes/*acumulador*/, nome/*valor atual*/) => {//todos nomes começa com um objeto vazio
    if (nome in todosNomes) {//Se o nome for uma chave em todosNomes então o valor da chave e aumentado em 1
        todosNomes[nome]++
    } else {
        todosNomes[nome] = 1//Se o nome não for uma chave então um chave com o nome é criada e seu valor é 1 
    }
    return todosNomes
}, {})//O valor inicial da função é um objeto vazio, para que a função começe pelo elemento de indice 0
console.log(quantidaDedeNomes)

//Agrupar por idade

let pessoas = [
    { nome: 'Alice', idade: 21 },
    { nome: 'Max', idade: 20 },
    { nome: 'Jane', idade: 20 }
];

function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, obj) {
        let key = obj[propriedade];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

let grupodePessoas = agruparPor(pessoas, 'idade');
console.log(grupodePessoas)
  // grupodePessoas é:
  // {
  //   20: [
  //     { nome: 'Max', idade: 20 },
  //     { nome: 'Jane', idade: 20 }
  //   ],
  //   21: [{ nome: 'Alice', idade: 21 }]
  // }