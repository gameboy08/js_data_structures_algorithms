
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    return helper(left, right, nums, target);
}

function helper (left, right, nums, target) {
    let leftIndex = left;
    let rightIndex = right;
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
        return middle
    }  
    if (leftIndex >= rightIndex ) {
        return -1
    }
    if (nums[middle] > target) {
        rightIndex = middle - 1
    } else {
        leftIndex = middle + 1
    }
    return helper(leftIndex, rightIndex, nums, target)
}
const nums = [1, 2];
const result = binarySearch(nums, 2);
console.log('result', result)