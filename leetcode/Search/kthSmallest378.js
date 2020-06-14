/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let m = matrix.length;
  let n = matrix[0].length;
  let lo = matrix[0][0];
  let hi = matrix[m][n];
  while (lo <= hi) {
    let mid = (lo + hi) / 2;
    let counter = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n && matrix[i][j] < mid; j++) {
        counter++;
      }
    }
    if (counter < k) lo = mid + 1;
    else hi = mid - 1;
  }
  return lo;
};

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

const k = 8;
const result = kthSmallest(matrix, k)
