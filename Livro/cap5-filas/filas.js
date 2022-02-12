
console.log('---------------------------------------------------------------------------------------')
console.log('FILA')
console.log('')
class Fila {
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
let cinema = new Fila();
console.log(cinema.isEmpty());
console.log(cinema.size());
console.log(cinema.peek());
cinema.push('Adeir')
cinema.push('Alessandro')
cinema.push('Leandro')
cinema.push('Giberto')
cinema.push('Marcele')
cinema.push('Luciene')
cinema.push('Vanderlli')
cinema.push('Gabrielle')
console.log(cinema.isEmpty())
console.log(cinema.size())
console.log(cinema.peek())
console.log(cinema.toString())
console.log(cinema.count)
console.log(cinema.countIni)
cinema.pop()
console.log(cinema.toString())
cinema.pop()
cinema.pop()
cinema.pop()
console.log(cinema.toString())
cinema.pop()
cinema.pop()
cinema.pop()
cinema.pop()
console.log(`${cinema.isEmpty()}
${cinema.size()}
${cinema.peek()}`)

console.log('---------------------------------------------------------------------------------------')
console.log('DEQUE')
console.log('')

class Deque {
    constructor() {
        this.count = 0
        this.countIni = 0
        this.item = {}
    }
    addfront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.countIni > 0) {
            this.countIni--
            this.item[this.countIni] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.item[i] = this.item[i - 1]
            }
            this.count++
            this.countIni = 0
            this.item[0] = element
        }
    }
    addBack(element) {
        this.item[this.count] = element
        this.count++
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const resut = this.item[this.count]
        delete this.item[this.count]
        return resut
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.item[this.countIni]
        delete this.item[this.countIni]
        this.countIni++
        return result
    }
    size() {
        return this.count - this.countIni
    }
    isEmpty() {
        return this.size() === 0
    }
    peekFront() {
        return this.item[this.countIni]
    }
    peekBack() {
        return this.item[this.count - 1]
    }
    toString() {
        /*let objString = ``
        for (let n in this.item) {
            objString += `${this.item[n]} `
        }
        return objString*/
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.item[this.countIni]}`
        for (let i = 1; i < this.count && this.count != 0; i++) {
            objString += `, ${this.item[i]}`
        }
        return objString
    }

}
let banco = new Deque()
console.log(banco.isEmpty())
banco.addfront('Michel')
banco.addBack('Micaelle')
banco.addBack('Josielle')
banco.addBack('Brunard')
banco.addBack('Anderson')
banco.addBack('Marcele')
banco.addBack('César')

console.log(banco.size())
console.log(banco.isEmpty())
console.log(banco.size())
console.log(banco.toString())
banco.removeBack()
console.log(banco.size())
console.log(banco.toString())
banco.removeFront()
console.log(banco.size())
console.log(banco.toString())
banco.addfront('Fernanda')
console.log(banco.size())
console.log(banco.toString())
banco.addfront('Adeir')
console.log(banco.size())
console.log(banco.toString())
console.log(banco.peekBack())
console.log(banco.peekFront())


console.log(banco.toString())
banco.removeFront()
banco.addBack('Adeir')
console.log(banco.toString())

