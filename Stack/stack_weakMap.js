const items = new WeakMap()
class Stack {
    constructor () {
        items.set(this, [])
    }
    push(element) {
        let arr = items.get(this)
        arr.push(element)
    }
    pop() {
        return items.get(this).pop()
    }
    peek() {
        let arr = items.get(this)
        return arr[arr.length - 1]
    }
    isEmpty() {
        let arr = items.get(this)
        return arr.length === 0
    }
    size() {
        let size = items.get(this)
        return size.length
    }
    clear() {
        items.set(this, [])
    }
    print() {
        console.log(items.get(this).toString())
    }
}  

let s = new Stack()
s.push(5)
s.print()