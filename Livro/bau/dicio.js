import { defaultToString } from "./funções úteis/util.js"
import { parChaveValor } from "./classes úteis/class.js"




export default class dicionario {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn// função que transforma qualquer parametro em string
        this.aurelio = {}
    }
    hasKey(key) {
        return this.aurelio[this.toStrFn(key)] !== undefined//Verifica se a chave existe no dicionario, se sim devolve true
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.aurelio[tableKey] = new parChaveValor(key, value);
            return true
        }
        return false
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.aurelio[this.toStrFn(key)]
        }
    }
    get(key) {
        const valuePair = this.aurelio[this.toStrFn(key)]//Pegou o conteiner parChaveValor
        return valuePair === null ? undefined : valuePair.valor//Se o conteiner for null retorne null SENÃO retorne a propriedade value do conteiner
    }
    keyValues() {
        return Object.values(this.aurelio)//Retorna um array com as valores das chaves principais do objeto aurelio
    }
    keyValuesLegacy() {
        const valuePair = []
        for (let k in this.aurelio) {
            if (this.hasKey(k)) {
                valuePair.push(this.tatle[k])
            }
        }
        return valuePair
    }
    key() {
        return this.keyValues().map(parChaveValor => parChaveValor.chave)//retorna um array com as chaves originais 
    }//.map(cada chave servo com parametro para a função e os resultados são retornados em um array)
    keyLegacy() {
        const key = []
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            key.push(valuePairs[i].chave)
        }
    }
    values() {
        return this.keyValues().map(parChaveValor => parChaveValor.valor)//retorna um array com os valores 
    }//.map(cada chave servo com parametro para a função e os resultados são retornados em um array)
    size() {
        return Object.keys(this.aurelio).length//Conta os elementos do array com as chaves originais 
    }
    isEmpty() {
        return this.size() === 0
    }
    toClear() {
        this.aurelio = {}
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].chave, valuePairs[i].valor);
            if (result === false)
                break
        }
    }
    String() {
        if (this.isEmpty()) {
            return 'Vazio';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    }
}


