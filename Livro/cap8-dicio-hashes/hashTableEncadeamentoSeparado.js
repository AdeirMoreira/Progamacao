import { defaultToString } from "../bau/ListaLigada.js/util.js";
import { tabelaHash } from "../bau/hashtable.js";
import { parChaveValor } from "../bau/ListaLigada.js/linked-list-models.js";
import { ListaLigada } from "../bau/ListaLigada.js/ListaLigada.js";


class hashTableSepareteChaining extends tabelaHash {
    constructor(toStrFn = defaultToString) {
        super(toStrFn)
        //this.tabela = {}
    }
    put(key, value) {
        if (key != null && value != null) {
            const posicao = this.hashCode(key)
            if (this.tabela[posicao] == null) {
                this.tabela[posicao] = new ListaLigada()
            }
            this.tabela[posicao].push(new parChaveValor(key, value))
            return true
        }
        return false
    }
    get(key) {
        const posicao = this.hashCode(key)
        const ListaLigada = this.tabela[posicao]
        if (ListaLigada != null && !ListaLigada.isEmpty()) {
            let atual = ListaLigada.getHead()
            while (atual != null) {
                if (atual.element.chave === key) {
                    return atual.element.valor
                }
                atual = atual.next
            }
        }
        return undefined
    }
    remove(key) {
        const posicao = this.hashCode(key)
        const ListaLigada = this.tabela[posicao]
        if (ListaLigada != null && !ListaLigada.isEmpty()) {
            let atual = ListaLigada.getHead()
            while (atual != null) {
                if (atual.element.chave === key) {
                    ListaLigada.remove(atual.element)
                    if (ListaLigada.isEmpty()) {
                        delete this.tabela[posicao]
                    }
                    return true
                }
                atual = atual.next
            }
        }
        return false
    }
    key() {
        let chaves = this.keyValues()
        let chavesOriginais = []
        chaves.forEach(chave => {
            let ListaLigada = this.tabela[chave]
            let atual = ListaLigada.getHead()
            while (atual !== undefined) {
                chavesOriginais.push(atual.element.chave)
                atual = atual.next
            }
        })
        return chavesOriginais
    }
    values() {
        let chaves = this.keyValues()
        let chavesOriginais = []
        chaves.forEach(chave => {
            let ListaLigada = this.tabela[chave]
            let atual = ListaLigada.getHead()
            while (atual !== undefined) {
                chavesOriginais.push(atual.element.valor)
                atual = atual.next
            }
        })
        return chavesOriginais
    }
}

const GoT = new hashTableSepareteChaining()
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
GoT.remove('Robert')
console.log(GoT.get('Robert'))
console.log(GoT.isEmpty())
console.log(GoT.size())
console.log(GoT.keyValues())
console.log(GoT.toString())
console.log(GoT.key())
console.log(GoT.values())
console.log(GoT.get('Margaery'))
console.log(GoT.get('Daenerys'))
console.log(GoT.get('Jonh Snow'))
console.log(GoT.get('Sansa'))
console.log(GoT.get('Arya'))
console.log(GoT.get('Tyrion'))
console.log(GoT.get('Oberyn'))
console.log(GoT.get('Theon'))
console.log(GoT.get('Cersei'))
//console.log(GoT.keyLegacy())
//console.log(GoT.valuesLegacy())

