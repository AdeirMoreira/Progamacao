import { defaultToString } from "./funções úteis/util.js";
import { tabelaHash } from "./hashtable.js";
import { parChaveValor } from "./classes úteis/class.js";
import { ListaLigada } from "./ListaLigada.js";
//import { defaultToString } from "../bau/ListaLigada.js/util.js";
//import { tabelaHash } from "../bau/hashtable.js";
//import { parChaveValor } from "../bau/ListaLigada.js/linked-list-models.js";
//import { ListaLigada } from "../bau/ListaLigada.js/ListaLigada.js";

export { hashTableSepareteChaining as tabelaHashEncadeamentoSeparado }


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

