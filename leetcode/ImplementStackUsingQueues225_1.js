/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue_one = [];
  this.queue_two = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue_one.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let size = this.queue_one.length;
  for (let i = 0; i < size - 1; i++) {
    let ele = this.queue_one.shift();
    this.queue_two.push(ele);
  }
  let result = this.queue_one.shift();
  const switch_queue = this.queue_one;
  this.queue_one = this.queue_two;
  this.queue_two = switch_queue;
  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  let size = this.queue_one.length;
  let index = 0;
  let result = null;
  while (this.queue_one.length !== 0) {
    const ele = this.queue_one.shift();
    if (index === size - 1) {
      result = ele;
    }
    this.queue_two.push(ele);
    index++;
  }
  const switch_queue = this.queue_one;
  this.queue_one = this.queue_two;
  this.queue_two = switch_queue;
  return result;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue_one.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj.pop());
