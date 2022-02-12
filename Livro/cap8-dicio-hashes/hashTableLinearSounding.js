import { tabelaHash } from "../bau/hashtable.js";
import { parChaveValor } from "../bau/ListaLigada.js/linked-list-models.js";
import { defaultToString } from "../bau/ListaLigada.js/util.js";


class LinearSounding extends tabelaHash {
    constructor(toStrFn = defaultToString) {
        super(toStrFn)
    }
    put(key, value) {
        if (key != null && value != null) {
            const posicao = this.hashCode(key);
            if (this.tabela[posicao == null]) {
                this.tabela[posicao] = new parChaveValor(key, value);
            } else {
                let index = posicao + 1;
                while (this.tabela[index] != null) {
                    index++;
                }
                this.tabela[index] = new parChaveValor(key, value);
            }
            return true
        }
        return false
    }
    get(key) {
        const posicao = this.hashCode(key);
        if (this.tabela[posicao] != null) {
            if (this.tabela[posicao].chave === key) {
                return this.tabela[posicao].valor;
            }
            let index = posicao + 1;
            while (this.tabela[index] != null && this.tabela[index].chave !== key) {
                index++
            }
            if (this.tabela[index] != null && this.tabela[index].chave === key) {
                return this.tabela[index].valor;//Diferente do livro ATENÇÃO
            }
        }
        return undefined
    }
    remove(key) {
        const posicao = this.hashCode(key)
        if (this.tabela[posicao] != null) {
            if (this.tabela[posicao].chave === key) {
                delete this.tabela[posicao]
                this.efeitoColateral(key, index);
                return true
            }
            let index = posicao + 1;
            while (this.tabela[index] != null && this.tabela[index].chave !== key) {
                index++
            }
            if (this.tabela[index] != null && this.tabela[index].chave === key) {
                delete this.tabela[index];
                this.efeitoColateral(key, index);
                return true
            }
        }
        return false
    }
    efeitoColateral(key, posicaoremovida) {//38
        const hash = this.hashCode(key);//35
        let index = posicaoremovida + 1;//39
        while (this.tabela[index] != null) {//pos 39 ocupada por CHAVE === CRUZEIRO
            const posHash = this.hashCode(this.tabela[index].chave)//hash da CHAVE CRUZEIRO
            if (posHash <= hash || posHash <= posicaoremovida) {
                this.tabela[posicaoremovida] = this.tabela[index];
                delete this.tabela[index];
                posicaoremovida = index
            }
            index++
        }
    }
}

const GoT = new LinearSounding()
console.log(GoT.isEmpty())
console.log(GoT.size())
GoT.put('Jonh Snow', 'Casa Targaryen')
GoT.put('Daenerys', 'Casa Targaryen')
GoT.put('Tyrion', 'Casa Lannister')
GoT.put('Cersei', 'Casa Lannister')
GoT.put('Margaery', 'Casa Tyrell')
GoT.put('Sansa', 'Casa Stark')
GoT.put('Arya', 'Casa Stark')
GoT.put('Robert', 'Casa Baratheon')
GoT.put('Oberyn', 'Casa Martell')
GoT.put('Theon', 'Casa Greyjoy')

console.log(GoT.hashCode('Daenerys') + ' Daenerys')
console.log(GoT.hashCode('Sansa') + ' Sansa')
console.log(GoT.hashCode('Margaery') + ' Margaery')
console.log(GoT.hashCode('Jonh Snow') + ' Jonh Snow')
console.log(GoT.hashCode('Cersei') + ' Cersei')
console.log(GoT.hashCode('Tyrion') + ' Tyrion')
console.log(GoT.hashCode('Arya') + ' Arya')
console.log(GoT.hashCode('Robert') + ' Robert')
console.log(GoT.hashCode('Oberyn') + ' Oberyn')
console.log(GoT.hashCode('Theon') + ' Theon')
console.log(' ')
console.log(`Jonh Snow da ${GoT.get('Jonh Snow')}`)
console.log(`Sansa da ${GoT.get('Sansa')}`)
console.log(`Cersei da ${GoT.get('Cersei')}`)
console.log(`Theon da ${GoT.get('Theon')}`)
console.log(`Daenerys da ${GoT.get('Daenerys')}`)
console.log(`Tyrion da ${GoT.get('Tyrion')}`)
console.log(`Oberyn da ${GoT.get('Oberyn')}`)
console.log(`Robert da ${GoT.get('Robert')}`)
console.log(`Arya da ${GoT.get('Arya')}`)
console.log(`Margaery da ${GoT.get('Margaery')}`)
console.log(' ')
//console.log(GoT.remove('Robert'))
console.log(GoT.get('Robert'))
//console.log(GoT.isEmpty())
//console.log(GoT.size())
console.log(GoT.keyValues())
//console.log(GoT.toString())
//console.log(GoT.key())
//console.log(GoT.values())
//console.log(GoT.keyLegacy())
//console.log(GoT.valuesLegacy())
console.log(GoT.get('Margaery'))
console.log(GoT.get('Daenerys'))
console.log(GoT.get('Jonh Snow'))
console.log(GoT.get('Sansa'))
console.log(GoT.get('Arya'))
console.log(GoT.get('Tyrion'))
console.log(GoT.get('Oberyn'))
console.log(GoT.get('Theon'))
console.log(GoT.get('Cersei'))

