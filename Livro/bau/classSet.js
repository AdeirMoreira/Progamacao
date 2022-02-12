
export default class Set {
    constructor() {
        this.item = {}
    }
    has(element) {
        //return element in this.item
        return Object.prototype.hasOwnProperty.call(this.item, element)//Object é uma classe padrão javaScript.
    }                          //hasOwnProperty devolver true se um elemento se encontra no objeto
    add(element) {
        if (!this.has(element)) {
            this.item[element] = element
            return true
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.item[element]
            return true
        }
        return false
    }
    toClear() {
        this.item = {}
    }
    size() {
        return Object.keys(this.item).length
    }
    sizeLegacy() {
        let cont = 0
        for (let key in this.item) {
            if (this.item.hasOwnProperty(key)) {
                cont++
            }
        }
        return cont
    }
    values() {
        return Object.values(this.item)
    }
    valuesLegacy() {
        let values = []
        for (let key in this.item) {
            if (this.item.hasOwnProperty(key)) {
                values.push(key)
            }
        }
        return values
    }
}

