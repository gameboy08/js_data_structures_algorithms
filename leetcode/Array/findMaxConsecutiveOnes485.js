/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let index = 0;
  let max = 0;
  nums.map((num) => {
    if (num === 1) {
      index++;
    } else {
      index = 0;
    }
    max = Math.max(index, max);
  });
  return max;
};

const nums = [1, 1, 0, 1, 1, 1];

const result = findMaxConsecutiveOnes(nums);
console.log("result", result);
