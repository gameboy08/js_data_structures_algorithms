function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function mergeSortRec(array) {
  const length = array.length;
  if(length === 1) {
    return array;
  }
  const mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid);
    return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
  let result = [],
  lIndex = 0,
  rIndex = 0;

  while(lIndex < left.length && rIndex < right.length) {
    if(left[lIndex] < right[rIndex]) {
      result.push(left[lIndex++]);
    } else {
      result.push(right[rIndex++]);
    }
  }

  while(lIndex < left.length) {
    result.push(left[lIndex++]);
  }

  while(rIndex < right.length) {
    result.push(right[rIndex++]);
  }
  return result;
}

function ArrayList() {
  var array = []; //{1}

  this.insert = function(item) {
    //{2}
    array.push(item);
  };

  this.toString = function() {
    //{3}
    return array.join();
  };

  this.bubbleSort = function() {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

  /**
   * 每次循环找到本次循环最小值的地址, 记录下最小值的地址，和i的地址做比较（看是否一样）
   */
  this.selectionSort = function() {
    let minIndex;
    for (let i = 0; i < array.length; i++) {
      minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[minIndex] > array[j]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, minIndex, i);
      }
    }
  };

  this.insertionSort = function() {
    for (let i = 0; i < array.length; i++) {
      for (j = i + 1; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          swap(array, j, j - 1);
        }
      }
    }
  };

  this.mergeSort = function() {
    array = mergeSortRec(array);
  };
}

function createNonSortedArray(size) {
  //{6}
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

var array = createNonSortedArray(5);

console.log(array.toString());

// array.bubbleSort();
// array.selectionSort();
// array.insertionSort();
array.mergeSort();
console.log(array.toString());
