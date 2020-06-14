/**
 * 第K大的数，意思是倒数K大的数
 */
//MinHeap Method
//Time O(logN)
const MinHeap = require("../Tree/MinHeap").MinHeap;
var KthLargest = function(k, nums) {
  let arr = nums;
  this.size = k;
  this.min_heap = new MinHeap();
  while (arr.length > 0) {
    let firstElement = arr.shift();
    if (this.min_heap.size() < this.size) {
      this.min_heap.insert(firstElement);
    } else {
      if (this.min_heap.peek() < firstElement) {
        this.min_heap.remove();
        this.min_heap.insert(firstElement);
      }
    }
  }
};

KthLargest.prototype.add = function(val) {
  if (this.min_heap.size() < this.size) {
    this.min_heap.insert(val);
  } else {
    if (val > this.min_heap.peek()) {
      this.min_heap.remove();
      this.min_heap.insert(val);
    }
  }
  return this.min_heap.peek();
};

let arr = [5, -1];
let k = 3;
let kthLargest = new KthLargest(k, arr);
console.log(kthLargest.add(2));
// console.log(kthLargest.add(5));
// console.log(kthLargest.add(10));
// console.log(kthLargest.add(9));
// console.log(kthLargest.add(4));
