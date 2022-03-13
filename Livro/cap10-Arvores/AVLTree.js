import { defaultCompare } from "../bau/funções úteis/util.js";
import arvoreBináriadeBusca from "./tree.js";
import { BalanceFactor, Compare, Node } from "../bau/classes úteis/class.js";

export default class AVLTree extends arvoreBináriadeBusca {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
    }
    getNodeHeight(node) {
        if (node == null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.esquerda), this.getNodeHeight(node.direita)) + 1
    }
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.esquerda) - this.getNodeHeight(node.direita)
        switch (heightDifference) {
            case - 2:
                return BalanceFactor.UNBALANCED_RIGHT
            case - 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UMBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }
    rotationLL(node) {
        const tmp = node.esquerda
        node.esquerda = tmp.direita
        tmp.direita = node
        return tmp
    }
    rotationRR(node) {
        const tmp = node.direita
        node.direita = tmp.esquerda
        tmp.esquerda = node
        return tmp
    }
    rotationLR(node) {
        node.esquerda = this.rotationRR(node.esquerda)
        return this.rotationLL(node)
    }
    rotationRL(node) {
        node.direita = this.rotationLL(node.direita)
        return this.rotationRR(node)
    }
    insert(key) {
        this.raiz = this.insertNode(this.raiz, key)
    }
    insertNode(node, key) {
        if (node == null) {
            return new Node(key)
        } else if (this.compareFn(key, node.chave) === Compare.Menor_que) {
            node.esquerda = this.insertNode(node.esquerda, key)
        } else if (this.compareFn(key, node.chave) === Compare.Maior_que) {
            node.direita = this.insertNode(node.direita, key)
        } else {
            return node
        }
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor === BalanceFactor.UMBALANCED_LEFT) {
            if (this.compareFn(key, node.esquerda.chave) === Compare.Menor_que) {
                node = this.rotationLL(node)
            } else {
                return this.rotationLR(node)
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.direita.chave)) {
                node = this.rotationRR(node)
            } else {
                return this.rotationRL(node)
            }
        }
        return node
    }
    remove(key) {
        this.raiz = this.removeNode(this.raiz, key)
    }
    removeNode(node, key) {
        node = super.removeNode(node, key)
        if (node == null) {
            return node
        }
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor === BalanceFactor.UMBALANCED_LEFT) {
            const balanceFactoresquerda = this.getBalanceFactor(node.esquerda)
            if (balanceFactoresquerda === BalanceFactor.BALANCED || balanceFactoresquerda === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationLL(node)
            }
            if (balanceFactoresquerda === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.esquerda)
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorDireita = this.getBalanceFactor(node.direita)
            if (balanceFactorDireita === BalanceFactor.BALANCED || balanceFactorDireita === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLL(node)
            }
            if (balanceFactorDireita === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.direita)
            }
        }
        return node
    }


}

const test = new AVLTree()
test.insert(3)
test.insert(2)
test.insert(6)
test.insert(5)
test.insert(7)
test.insert(12)
test.insert(8)
test.insert(9)
test.insert(11)
test.insert(4)
test.insert(10)
const printNode = (value) => console.log(value)
test.inOrderTraverse(printNode)
console.log(test.search(8))
test.remove(8)

