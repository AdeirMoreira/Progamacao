import { Compare, Node } from "../bau/classes úteis/class.js";
import { defaultCompare } from "../bau/funções úteis/util.js";



export default class arvoreBináriadeBusca {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.raiz = null;
    }
    insert(key) {
        if (this.raiz == null) {
            this.raiz = new Node(key);
        } else {
            this.insertNode(this.raiz, key);
        }

    }
    insertNode(node, key) {
        if (this.compareFn(key, node.chave) === Compare.Menor_que) {
            if (node.esquerda == null) {
                node.esquerda = new Node(key);
            } else {
                this.insertNode(node.esquerda, key);
            }
        } else {
            if (node.direita == null) {
                node.direita = new Node(key)
            } else {
                this.insertNode(node.direita, key)
            }
        }
    }
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.raiz, callback)
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.esquerda, callback);
            callback(node.chave);
            this.inOrderTraverseNode(node.direita, callback);
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.raiz, callback)
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.chave);
            this.preOrderTraverseNode(node.esquerda, callback);
            this.preOrderTraverseNode(node.direita, callback);
        }
    }
    posOrderTraverse(callback) {
        this.posOrderTraverseNode(this.raiz, callback)
    }
    posOrderTraverseNode(node, callback) {
        if (node != null) {
            this.posOrderTraverseNode(node.esquerda, callback);
            this.posOrderTraverseNode(node.direita, callback);
            callback(node.chave)
        }
    }
    mim() {
        return this.mimNode(this.raiz).chave
    }
    mimNode(node) {
        let atual = node
        while (atual != null && atual.esquerda != null) {
            atual = atual.esquerda
        }
        return atual//DIFERENTE DO LIVRO "ATENÇÃO"
    }
    max() {
        return this.maxNode(this.raiz).chave
    }
    maxNode(node) {
        let atual = node
        while (atual != null && atual.direita != null) {
            atual = atual.direita
        }
        return atual//DIFERENTE DO LIVRO "ATENÇÃO"
    }
    search(key) {
        return this.searchNode(key, this.raiz)
    }
    searchNode(key, node) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.chave) === Compare.Menor_que) {
            return this.searchNode(key, node.esquerda);
        } else if (this.compareFn(key, node.chave) === Compare.Maior_que) {
            return this.searchNode(key, node.direita)
        } else {
            return true
        }
    }
    remove(key) {
        this.raiz = this.removeNode(this.raiz, key)
    }
    removeNode(node, key) {
        if (node == null) {
            return null
        }
        if (this.compareFn(key, node.chave) === Compare.Menor_que) {
            node.esquerda = this.removeNode(node.esquerda, key)
            return node
        } else if (this.compareFn(key, node.chave) === Compare.Maior_que) {
            node.direita = this.removeNode(node.direita, key)
            return node
        } else {
            if (node.esquerda == null && node.direita == null) {
                node = null
                return node
            }
            if (node.esquerda == null) {
                node = node.direita
                return node
            } else if (node.direita == null) {
                node = node.esquerda
                return node
            }
            const aux = this.mimNode(node.direita)
            node.chave = aux.chave
            node.direita = this.removeNode(node.direita, aux.chave)
            return node
        }

    }

}

/*const tree = new arvoreBináriadeBusca()
tree.insert(15)
tree.insert(5)
tree.insert(10)
tree.insert(7)
tree.insert(12)
tree.insert(3)
tree.insert(8)
tree.insert(13)
tree.insert(9)
tree.insert(30)
tree.insert(2)
tree.insert(1)
tree.insert(4)
tree.insert(6)
tree.insert(11)
tree.insert(50)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

const printNode = (value) => console.log(value)
tree.inOrderTraverse(printNode)
tree.posOrderTraverse(printNode)
tree.preOrderTraverse(printNode)
console.log(tree.max())
console.log(tree.mim())
console.log(tree.search(12) ? 'Chave 12 entrada ' : 'Chave não encontrada');
console.log(tree.search(24) ? 'Chave 21 entrada ' : 'Chave não encontrada');
console.log(tree.remove(6))
console.log(tree.remove(2))
console.log(tree.remove(10))
*/

