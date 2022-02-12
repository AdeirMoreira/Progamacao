class Filme {
    constructor(titulo, lancamento, diretor) {
        this.titulo = titulo
        this.lançamento = lancamento
        this.diretor = diretor
    }
    idade() {
        let data = new Date()
        let ano = data.getFullYear()
        return (ano - this.lançamento) + ' anos'

    }
}
class Filme1 extends Filme {
    constructor(titulo, lancamento, diretor, orçamento, ator, atriz, receita) {
        super(titulo, lancamento, diretor);
        this.orçamento = orçamento
        this.ator = ator
        this.atriz = atriz
        this.receita = receita
    }
    lucro() {
        return (this.receita - this.orçamento) + " Milhões de Dólares"
    }
}
let meuFilme = new Filme1('Batman O Cavaleiro das Trevas', 2008, 'Christopher Nolan', 185, 'Christian Bale', 'Maggie Gyllenhaal', 1000);
console.log(`${meuFilme.titulo}
${meuFilme.lançamento}
${meuFilme.ator}
${meuFilme.atriz}
${meuFilme.diretor}
${meuFilme.idade()}
${meuFilme.lucro()}`)
console.log('------------------------------------------------------------------------------------------------------------')
let outroFilme = new Filme1('Interestelar', 2014, 'Christopher Nolan', 165, 'Matthew McConaughey', 'Anne Hathaway', 675)
console.log(`Título: ${outroFilme.titulo}
Lançamento: ${outroFilme.lançamento}
Diretor: ${outroFilme.diretor}
Melhor Ator: ${outroFilme.ator}
Melhor Atriz: ${outroFilme.atriz}
Orçamento: ${outroFilme.orçamento} milhões de Dolares
Lucro: ${outroFilme.lucro()}
Idade: ${outroFilme.idade()}`)