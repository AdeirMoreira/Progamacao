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

export { Stack2 as pilhaOBJ }

//const exemplo = new Stack2()
//console.log(exemplo.isEmpty())