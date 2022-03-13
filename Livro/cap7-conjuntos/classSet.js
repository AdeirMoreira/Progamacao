
class Set {
    constructor() {
        this.item = {}
    }
    has(element) {
        //return element in this.item
        return Object.prototype.hasOwnProperty.call(this.item, element)
    }
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

const set = new Set()
set.add(12)
set.add('Adeir')
console.log(set.values())
set.add('Fernanda')
console.log(set.valuesLegacy())
console.log(set.has('Marcele'))
console.log(set.sizeLegacy())
console.log(set.size())
//console.log(set.valuesLegacy())
//console.log(set.values())
console.log(set.add('Marcele'))
console.log(set.delete('Fernanda'))
console.log(set.valuesLegacy())





