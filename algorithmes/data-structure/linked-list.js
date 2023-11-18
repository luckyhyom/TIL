class Node {
    data
    nextNode
    backNode
    constructor(data) {
        this.data = data
    }
    addNextNode(data) {
        const nextNode = new Node(data)
        nextNode.backNode = this
        this.nextNode = nextNode
    }
    next() {
        if(!this.nextNode) throw new Error('no nextnode')
        return this.nextNode
    }

    back() {
        if(!this.backNode) throw new Error('no backnode')
        return this.backNode
    }
}

const first = new Node(2)
console.log(first)
first.addNextNode(3)
console.log(first)
const second = first.next()
console.log(second)
console.log(second.back())
console.log(second.back().back())