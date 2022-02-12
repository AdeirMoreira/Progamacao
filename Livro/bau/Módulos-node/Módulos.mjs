import { circulo, quadrado } from './calcArea.mjs';
import * as area from './calcArea.mjs'
import Livro from './Livro.mjs';
const meuLivro = new Livro('Estruturas de Dados e Algoritimos em JavaScript')
console.log(meuLivro.escreverTitulo());
console.log(quadrado(5));
console.log(circulo(5));
console.log(area.areadoTriangulo(20, 12))