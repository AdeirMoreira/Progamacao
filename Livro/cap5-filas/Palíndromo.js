import { Deque } from "../bau/deque.js";
function palindromocheck(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return 'String inválida'
    }
    const deque = new Deque()
    const minuscString = aString.toLocaleLowerCase().split(' ').join('')
    let Eigual = true
    let priLetra, ultLetra;
    for (let i = 0; i < minuscString.length; i++) {
        deque.addBack(minuscString.charAt(i))
    }
    while (deque.size() > 1 && Eigual) {
        priLetra = deque.removeFront()
        ultLetra = deque.removeBack()
        if (priLetra !== ultLetra) {
            Eigual = false
        }
    }
    if (Eigual === true) {
        return 'É um Palíndromo'
    } else {
        return 'NÃO é um Palíndromo'
    }
}
let palavra = 'Was it a car or a cat i saw'
console.log(`A palavra/frase ${palavra.toLocaleUpperCase()} ${palindromocheck(palavra)}`)