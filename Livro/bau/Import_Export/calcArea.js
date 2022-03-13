const areadoCirculo = r => 3.14 * (r ** 2)
const areadoQuadrado = s => s * s
export const areadoTriangulo = function triangulo(b, a) {
    return (b * a) / 2
}

export { areadoCirculo as circulo, areadoQuadrado as quadrado };