class Jogo {
    constructor(titulo, duracao, loja, desenvolvedora) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.loja = loja;
        this.desenvolvedora = desenvolvedora;
    }
    escrevertitulo() {
        return (this.titulo)
    }
}
let jogo = new Jogo('Red Dead Redemption 2 ', 575 + " horas", 'Epic Games ', "RockStar Games");
console.log(`${jogo.titulo}
${jogo.duracao}
${jogo.loja}
${jogo.desenvolvedora}
${'====================================='}
${jogo.escrevertitulo()}`)
console.log('-----------------------------------------------------------')
let jogo2 = new Jogo('Skyrim', 1147 + 'horas', 'Steam', 'Bethesda')
console.log(jogo2.titulo)
jogo2.titulo = 'The Elder Scroll V: Skyrim'
console.log(`${jogo2.titulo}
${jogo2.duracao}
${jogo2.loja}
${jogo2.desenvolvedora}
${'====================================='}
${jogo2.escrevertitulo()}`)