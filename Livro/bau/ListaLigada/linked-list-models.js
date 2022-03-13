export { Node, NodeDuplo }

class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}
class NodeDuplo extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}
