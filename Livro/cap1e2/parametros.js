let array = [12, 21, 16]
function função(w = 0, x = 0, y = 1, z = 1) {
    return w + x / y * z
}
console.log(`Aqui os parametros y e z são default = 1. Resultado = ${função(10, 5)}
Aqui o array ${array} foi usado com paramentros da função. Resultado = ${função(...array, 100)}`)