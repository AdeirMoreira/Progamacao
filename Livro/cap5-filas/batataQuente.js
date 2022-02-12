import Fila from "../bau/fila.js";

const nomes = ['Adeir', 'Marcele', 'Leandro', 'Gabi', 'Giberto', 'Sthefany', 'Luciene', 'Vandelli', 'Bianca', 'Suelli']
const result = batataquente(nomes, 145)

function batataquente(nomes, num) {
    const fila = new Fila()
    const listaeliminados = []
    for (let i = 0; i < nomes.length; i++) { // O array 'nomes' foi se tornou uma esntrutura 'fila' 
        fila.push(nomes[i])
    }
    while (fila.size() > 1) { //Fila rodou o numero de vezes do parametro 'num'
        for (let i = 0; i < num; i++) {//cada giro um primeiro elemento se tornou o ultimo
            fila.push(fila.pop());
        }
        listaeliminados.push(fila.pop())//o elemento que está no fim fila e removido ate sobrar apenas 1
    }
    return {
        Eliminados: listaeliminados,//Retornou o array 'listaeliminados' como uma PROPIEDADE!!!
        Vencedor: fila.pop()//Retornou a fila "fila" com o único elemento que restou como uma PROPIEDADE///
    }

}
result.Eliminados.forEach(nomes => {// Como a propiedade 'Eliminados' e um array foi usado o método 'forEachh' para exibir todos 
    console.log(`${nomes} foi eliminado!`)//os nomes dos eliminados um por vez
})
console.log(`
O vencedor é: ${result.Vencedor}`)
