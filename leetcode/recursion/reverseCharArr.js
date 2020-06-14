/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//   //   console.log("s", s);
//   helper(0, s);
//   console.log("s", s);
// };

// function helper(index, s) {
//   if (s == null || index + 1 === s.length) {
//     return;
//   }
//   const size = s.length;
//   const temp = s.shift();
//   s.splice(size - index - 1, 0, temp);
//   helper(index + 1, s);
// }

// var reverseString = function(s) {
//   if (s.length === 0) {
//     return;
//   }
//   const temp = s.shift();
//   reverseString(s);
//   s.push(temp);
// };

var reverseString = function(s) {
  helper(0, s.length - 1, s);
};

function helper(start, end, s) {
  while (start >= end) {
    return;
  }
  const swap = s[start];
  s[start] = s[end];
  s[end] = swap;
  helper(start + 1, end - 1, s);
}

reverseString(["H", "a", "n", "n", "a", "h"]);
