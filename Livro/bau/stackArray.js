export const Stack = class Stack {
    constructor() {
        this.items = []
    }
    push(elemento) {
        this.items.push(elemento);// adiciona 1 elemnto ao topo da pilha
    }
    pop() {
        return this.items.pop();// remove o elemento que está no topo da pilha e o retorna
    }
    peek() {
        return this.items[this.items.length - 1];// retorna o elemento que está no topo da pilha 
    }
    isEmpty() {
        return this.items.length === 0;// retorna o true se a pilha está vazia e false se não está
    }
    size() {
        return this.items.length; // retorna o tamanho da pilha em elementos(indices)
    }
    clear() {
        this.items = []// esvazia a pilha 
    }
}