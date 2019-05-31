module.exports = function Stack() {
    let items = []
    this.push = function(element) {
        items.push(element)
    }
    this.pop = function() {
        return items.pop();
    }
    this.peek = function() {
        return items[items.length - 1]
    }
    this.isEmpty = function() {
        return items.length === 0
    }
    this.size = function() {
        return items.length;
    }
    this.clear = function() {
        items = [];
    }
    this.print = function(){
      console.log(items.toString());
    };
}

// let stack = new Stack();
// console.log(stack.isEmpty()); //输出为 true
// stack.push(5);
// stack.push(8);
// console.log(stack.print())
