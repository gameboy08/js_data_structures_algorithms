/**
 * 1. using array to represent minHeap
 * 2. minHeap is a binary tree
 * 3. left child: i * 2
 * 4. right child: i * 2 + 1
 * 5. parent: i / 2
 */
exports.MinHeap = function() {
  //leave index=0 as null, start the heap from index = 1 for easier math
  let heap = [Number.NEGATIVE_INFINITY];
  //time: O(logN)
  this.insert = function(num) {
    heap.push(num);
    //means more than one node, example: [null, 20] 20 is the first node
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        [heap[idx], heap[Math.floor(idx / 2)]] = [
          heap[Math.floor(idx / 2)],
          heap[idx]
        ];
        if (idx > 1) {
          idx = Math.floor(idx / 2);
        } else {
          break;
        }
      }
    }
  };

  /**
   * 1. return and remove the index=1 (smallest) element
   * 2. sort the heap
   * swap the last element to the first, and delete the last
   * compare the parent with children, swap parent node with the smaller child node (left child comparing to right child),
   * from top to bottom.
   * Time: O(log(N))
   */

  this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1); // remove the last node
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1; // parent node
      let left = i * 2;
      let right = i * 2 + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = i * 2; //parent position swap to left child
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = i * 2 + 1;
        }
        left = i * 2;
        right = i * 2 + 1;
        if (heap[right] === undefined) {
          if (heap[i] >= heap[left]) {
            [heap[i], heap[left]] = [heap[left], heap[i]];
          }
          break;
        }
        if (heap[left] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
  this.peek = function() {
    return heap[1];
  };
  this.size = function() {
    return heap.length - 1;
  };
  /**
   * Time: O(N * log(N))
   */
  this.sort = function() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(heap.remove());
    }
    return result;
  };
  this.print = function() {
    console.log("heap", heap);
  };
};

// let mh = new MinHeap();

// mh.insert(5);
// mh.print();
// mh.insert(-1);
// mh.print();
// mh.insert(2);
// mh.print();
// mh.insert(4);
// mh.insert(5);
// mh.remove();
// mh.print();
