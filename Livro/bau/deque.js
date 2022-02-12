export class Deque {
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
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.item[this.countIni]}`
        for (let i = 1; i < this.count && this.count != 0; i++) {
            objString += `${this.item[i]}`
        }
        return objString
    }

}

