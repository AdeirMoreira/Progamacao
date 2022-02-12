import { defaultToString, HashCodeDJB2 } from "./funções úteis/util.js"
import { parChaveValor } from "./classes úteis/class.js"



export { hashTable as tabelaHash }

class hashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.tabela = {}
    }
    codigoAsc2(key) {//Transforma a key em um número usando o código ASCII de cada letra 
        if (typeof key === 'number') {
            return key
        }
        const tabelaKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tabelaKey.length; i++) {//O código de cada letra e somado para se chegar ao número
            hash += tabelaKey.charCodeAt(i)
        }
        return hash % 37 // o resto da divisão e retornado para evitar números grandes 
    }
    hashCode(key) {
        //return this.codigoAsc2(key)//Chama o método que transforma a key em um número
        return HashCodeDJB2(key)
    }
    put(key, value) {
        if (key != null && value != null) {
            const posicao = this.hashCode(key)
            this.tabela[posicao] = new parChaveValor(key, value)
            return true
        }
        return false
    }
    get(key) {
        const valuePair = this.tabela[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.valor
    }
    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.tabela[hash]
        if (valuePair != null) {
            delete this.tabela[hash]
            return true
        }
        return false
    }
    keyValues() {
        return Object.keys(this.tabela)//retorna um array com todas as chaves numéricas usadas no objeto tablea
    }
    keyLegacy() {
        const valuesChaves = this.keyValues()
        const chaves = []
        valuesChaves.forEach(chave => chaves.push(this.tabela[chave].chave))//Cada chave é usada como paramentro da função 
        return chaves //A função adiciona cada chave original não númerica em um array 
    }
    key() {
        return this.keyValues().map(chave => this.tabela[chave].chave)//Método keyValues()retorna um array com as chaves númerocas 
    }//o método .map() usa cada chave numérica como paramentro da função que adiciona as chaves originais em um array
    valuesLegacy() {
        const valuesChaves = this.keyValues()
        const valores = []
        valuesChaves.forEach(chave => valores.push(this.tabela[chave].valor))//Cada chave é usada como paramentro da função 
        return valores //A função adiciona cada valor em um array 
    }
    values() {
        return this.keyValues().map(chave => this.tabela[chave].valor)//Método keyValues()retorna um array com as chaves númerocas 
    }//o método .map() usa cada chave numérica como paramentro da função que adiciona os valores em um array
    size() {
        return Object.keys(this.tabela).length//Conta quantos elemento tem o array com as chaves númericas 
    }
    isEmpty() {
        if (this.size() == 0) {
            return true
        } else {
            return false
        }
    }
    toString() {
        if (this.isEmpty()) {
            return 'Vazio'
        }
        const chaves = Object.keys(this.tabela)
        let objString = `{${chaves[0]} => ${this.tabela[chaves[0]].toString()}}`
        for (let i = 1; i < chaves.length; i++) {
            objString = `${objString}, {${chaves[i]} => ${this.tabela[chaves[i]].toString()}}`
        }
        return objString
    }
}

