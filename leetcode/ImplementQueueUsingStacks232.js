const Stack = require("../Stack/stack_ES5");

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.store_stack = new Stack();
  this.fetch_stack = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.store_stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.fetch_stack.isEmpty()) {
    return this.fetch_stack.pop();
  }
  while (!this.store_stack.isEmpty()) {
    const item = this.store_stack.pop();
    this.fetch_stack.push(item);
  }
  return this.fetch_stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.fetch_stack.isEmpty()) {
    return this.fetch_stack.peek();
  }
  while (!this.store_stack.isEmpty()) {
    const item = this.store_stack.pop();
    this.fetch_stack.push(item);
  }
  return this.fetch_stack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.store_stack.isEmpty() && this.fetch_stack.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

module.exports = MyQueue;
