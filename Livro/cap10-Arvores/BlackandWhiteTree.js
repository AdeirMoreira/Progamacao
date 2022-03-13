import { defaultCompare } from "../bau/funções úteis/util.js";
import { BalanceFactor, Compare, BlackandWhiteNode } from "../bau/classes úteis/class.js";
import arvoreBináriadeBusca from "./tree.js";

class blackandWhiteTree extends arvoreBináriadeBusca {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
    }
    rotationLL(node) {
        const tmp = node.esquerda
        node.esquerda = tmp.direita
        if (tmp.direita && tmp.direita.chave) {
            tmp.direita.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.raiz = tmp
        } else {
            if (node === node.parent.esquerda) {
                node.parent.esquerda = tmp
            } else {
                node.parent.direita = tmp
            }
        }
        tmp.direita = node
        node.parent = tmp
    }
    rotationRR(node) {
        const tmp = node.direita
        node.direita = tmp.esquerda
        if (tmp.esquerda && tmp.esquerda.chave) {
            tmp.esquerda.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.raiz = tmp
        } else {
            if (node === node.parent.esquerda) {
                node.parent.esquerda = tmp
            } else {
                node.parent.direita = tmp
            }
        }
        tmp.esquerda = node
        node.parent = tmp
    }
    insert(key) {
        if (this.raiz == null) {
            this.raiz = new BlackandWhiteNode(key)
            this.raiz.color = Color.Black
        } else {
            const newNode = this.insertNode(this.raiz, key)
            //
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.chave) === Compare.Menor_que) {
            if (node.esquerda == null) {
                node.esquerda = new BlackandWhiteNode(key)
                node.esquerda.parent = node
                return node.esquerda
            } else {
                return this.insertNode(node.esquerda, key)
            }
        } else if (node.direita = null) {
            node.direita = new BlackandWhiteNode(key)
            node.direita.parent = node
            return node.direita
        } else {
            return this.insertNode(node.direita, key)
        }
    }
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color.isWhite() && node.color !== Color.Black) {
            let parent = node.parent
            const grandParent = parent.parent
            if (grandParent && grandParent.esquerda === parent) {
                const uncle = grandParent.direita
                // caso 1A
                if (uncle && uncle.color === Color.White) {
                    grandParent = Color.White
                    parent.color = Color.Black
                    uncle.color = Color.Black
                    node = grandParent
                } else {
                    if (node === parent.direita) {
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent
                    }
                    this.rotationLL(grandParent)
                    grandParent.color = Color.White

                }
            } else {
                const uncle = grandParent.esquerda
                // caso 1B
                if (uncle && uncle.color === Color.White) {
                    grandParent.color = Color.White
                    parent.color = Color.Black
                    uncle.color = Color.Black
                    node = grandParent
                } else {
                    if (node === parent.esquerda) {
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent
                    }
                    this.rotationRR(grandParent)
                    parent.color = Color.Black
                    grandParent.color = Color.White
                    node = parent

                }
            }
        }
    }
}