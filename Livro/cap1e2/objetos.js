function Livro(titulo, paginas, autor, versao, editora) {
    this.titulo = titulo
    this.paginas = paginas
    this.autor = autor
    this.versao = versao
    this.editora = editora
    this.numerodepaginas = function () { //Uma funçao declarada com uma propiedade do Objeto
        console.log(this.paginas)
    }
}
Livro.prototype.escrevertitulo = function () {//Outra função decladara como propiedade no objeto, mas por outro método
    console.log(this.titulo);
};
var livro = new Livro('Estrutura de Dados e Algoritimos com JavaScript', 405, 'Loiane Groner', '2°', 'novatec')
console.log(`${livro.titulo}
${livro.paginas}
${livro.autor}
${livro.versao}
${livro.editora}`)
console.log('----------------------------------------------------')
livro.escrevertitulo();
livro.numerodepaginas();