class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        this.items.pop()
    }
    peek() {
        return this._items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }
    print() {
        console.log(this.items.toString())
    }
}

let stack = new Stack()
stack.push(5)
stack.push(8)
stack.print();
console.log(stack.items)