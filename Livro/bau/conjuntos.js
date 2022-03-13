import Set from "./classSet.js"

export { cojunto as conjunto }

class cojunto extends Set {
    constructor(item) {
        super(item)
    }
    uniao(outroSet) {
        const uniaoSet = new Set()
        let values = this.values()//Um array com todos os elementos da classe Set
        for (let i = 0; i < values.length; i++) {
            uniaoSet.add(values[i])
        }
        values = outroSet.values()//Agora um array com todos os elementos da classe outroSet
        for (let i = 0; i < values.length; i++) {
            uniaoSet.add(values[i])
        }
        return uniaoSet
    }
    /*intersecao(outroSet) {
        const intersectionSet = new Set()
        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (outroSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }*/
    intersecao(outroSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const outroValues = outroSet.values()
        let grandeSet = values
        let pequenoSet = outroValues
        if (outroValues.length > values.length) {
            grandeSet = outroValues
            pequenoSet = values
        }
        pequenoSet.forEach(element => {//pequenoSet é um array com o conjunto com menos elementos.Cada elemento será paramentro para a função.
            if (grandeSet.includes(element)) {//O método includes devolve true se o paramentro se encontra no conjunto maior
                intersectionSet.add(element)//se incluse devolvr true para o parametro ele será adicionado ao set intersectionSet
            }
        });
        return intersectionSet
    }
    diferenca(outroSet) {
        const differenceSet = new Set()
        this.values().forEach(element => {//this.values é um array. O método forEacho executará a função para cada elemento do array.
            if (!outroSet.has(element)) {//Cada elemento o array será passado como paramentro para função
                differenceSet.add(element)
            }
        })
        return differenceSet
    }
    subConjuntoDe(outroSet) {
        if (this.size() > outroSet.size()) {
            return false
        }
        let subconunto = true
        this.values().every(element => {//com o método .every a função so será executando enquanto ela devolver true. 
            if (!outroSet.has(element)) {//assim que devolver false, sairá do laço.
                subconunto = false
                return false
            }
            return true
        })
        return subconunto
    }


}

