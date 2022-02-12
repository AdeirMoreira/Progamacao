let array = []
function criaarray(value) {
    for (let i = value; i >= 0; i--) {
        array[i] = value - i
        //console.log(array[i])
    }
}
criaarray(5)
console.log(array)

console.log('---------------------------------------')

let iterator = array[Symbol.iterator](); //A variável 'iterator' recebeu todos os valores do Array
//console.log(iterator.next().value);
for (const n of iterator) {
    console.log(n);
}

console.log('---------------------------------------')

let aEntries = array.entries();// A variável 'aEnteries' recebeu o par chaves(indice)/valor(elemento) do Array
//console.log(aEntries.next().value);
for (const n of aEntries) {
    console.log(n)
}

console.log('---------------------------------------')

const aKeys = array.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

console.log('---------------------------------------')

const aValues = array.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());




