function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
var book = new Book('title', 'pag', 'isbn');
console.log(book.title)
book.title = 'Estruturas de Dados e Algoritimos em JavaScript'
book.pages = 405
console.log(book.title)
console.log(book.pages)