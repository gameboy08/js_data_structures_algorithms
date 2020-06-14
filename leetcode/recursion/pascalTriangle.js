/**
 * Method 1 using recursion with memoize, but return all the rows
 * @param {number} numRows
 * @return {number[][]}
 */

// var generate = function(numRows) {
//   let arr = [];
//   for (let i = 0; i <= numRows - 1; i++) {
//     let row_arr = [];
//     for (let j = 0; j <= i; j++) {
//       row_arr.push(helper(i, j));
//     }
//     arr.push(row_arr);
//   }
//   return arr;
// };
// console.log(generate(5));

/**
 * Method 1 using recursion with memoize,
 * but return the last row.
 */
let mem = {};
function helper(i, j) {
  if (j === 0 || j === i) {
    return 1;
  }

  if (mem[`${i}${j}`]) {
    return mem[`${i}${j}`];
  }
  mem[`${i}${j}`] = helper(i - 1, j - 1) + helper(i - 1, j);
  return mem[`${i}${j}`];
}

/**
 * @param {number} rowIndex starts from 0
 * @return {number[]}
 * i for row; j for column
 */
var getRow = function(rowIndex) {
  let i = rowIndex;
  let rowArr = [];
  for (let j = 0; j <= i; j++) {
    rowArr.push(helper(i, j));
  }
  return rowArr;
};

console.log(getRow(3));

/**
 * Method 2
 * @param {*} rowIndex
 */
// var getRow = function(rowIndex) {
//   let row = [1];
//   for (let r = 1; r < rowIndex + 1; r++) {
//     row[0] = 1;
//     row[r] = 1;
//     for (let c = 1; c < r; c++) {
//       row[c] = prev[c] + prev[c - 1];
//     }
//     prev = Array(...row);
//   }
//   return row;
// };

// console.log(getRow(3));
