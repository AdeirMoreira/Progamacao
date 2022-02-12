class Person {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value
    }
}
let char = new Person('Frodo');
console.log(char.nome);
char.nome = 'Gandalf';
console.log(char.nome);
char._nome = 'Sam';
console.log(char.nome);
//Não Entendi o que o 'get' ou 'set' faz nem o '_'
console.log('========================================================================')
class Pessoa {
    constructor(nome, sobrenome, anonasc, cpf, rg) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anonasc = anonasc;
        this.cpf = cpf;
        this.rg = rg
    }
    idade() {
        let data = new Date()
        let ano = data.getFullYear()
        let idade = (ano - this.anonasc)
        return idade
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome
    }
}
let cliente = new Pessoa('Adeir', 'Moreira', 1994, '127.943.436-88', 'MG 18.071.767');
console.log(`Nome: ${cliente.nomeCompleto()}
Idade: ${cliente.idade()}
CPF: ${cliente.cpf}
RG: ${cliente.rg}`)