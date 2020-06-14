/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 以二维数组中的第一个元素数组的最后一位为起始比较，比它小则 列-1 比他打则 行+1
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    const rowLength = matrix.length
    const columnLength = matrix[0].length
    let r = 0;
    let c = columnLength - 1;
    while (r < rowLength && c >= 0) {
        if(matrix[r][c] === target) return true
        else if(matrix[r][c] > target) {
            c--;
        } else {
            r++
        }
    }
    return false
};

const matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
const target = 20

const result = searchMatrix(matrix, target)
console.log('result', result)