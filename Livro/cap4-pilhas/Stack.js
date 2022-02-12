console.log('PILHA COM ARRAY')
class Stack {
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
const pilha = new Stack();
console.log(pilha.isEmpty());
pilha.push(5)//O método push adiciona apenas 1 elemento por vez a pilha
pilha.push(10)//O método push adiciona apenas 1 elemento por vez a pilha
console.log(pilha.peek())
pilha.pop()//O método pop remove apenas 1 elemento por vez a pilha
console.log(pilha.peek());
pilha.push(20)
pilha.push(50)
pilha.push(100)
console.log(pilha.size());
console.log(pilha.isEmpty());
pilha.pop()
pilha.pop()
console.log(pilha.size())

console.log('--------------------------------------------------------------------')
// vamos criar uma pilha so que dessa vez usaremos um objeto em vez de um array
console.log('PILHA COM OBJETO')
class Stack2 {
    constructor() {
        this.cont = 0
        this.items = {}
    }
    push(element) {
        this.items[this.cont] = element
        this.cont++;
    }
    size() {
        return this.cont
    }
    isEmpty() {
        return this.cont === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.cont--;
        const result = this.items[this.cont];
        delete this.items[this.cont];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.cont - 1];
    }
    clear() {
        this.items = {}
        this.cont = 0
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.cont; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
    //while (!this.isEmpty()) {
    //this.pop();
    //} Ocorrem erros!
}
const pilha2 = new Stack2();
console.log(pilha2.isEmpty())
console.log(pilha2.size())
console.log(pilha2.peek())
console.log(pilha2.toString())
pilha2.push(5)
pilha2.push(8)
pilha2.push('cinco')
pilha2.push('oito')
console.log(pilha2.isEmpty())
console.log(pilha2.size())
console.log(pilha2.peek())
console.log(pilha2.toString())
console.log(pilha2.pop())
console.log(pilha2.toString())
pilha2.clear()
console.log(pilha2.size())
