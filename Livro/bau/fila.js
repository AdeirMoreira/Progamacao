export default class Fila {
    constructor() {
        this.count = 0;
        this.countIni = 0;
        this.item = {};
    }
    push(element) {
        this.item[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.item[this.countIni];
        delete this.item[this.countIni];
        this.countIni++;
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.countIni];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.count - this.countIni;
    }
    clear() {
        this.item = {};
        this.count = 0;
        this.countIni = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return undefined
        }
        let objString = `${this.item[this.countIni]}`;
        for (let i = this.countIni + 1; i < this.count; i++) {
            objString += `, ${this.item[i]}`;
        }
        return objString;
    }
}
