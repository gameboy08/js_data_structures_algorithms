var moveZeroes = function(nums) {
    let index = 0
    nums.forEach((ele, i, arr) => {
        if (ele !== 0) {
            arr[index++] = ele
        }
    });
    for(let i=index; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

var nums = [0,1,0,3,12]

const result = moveZeroes(nums)
console.log('result', result)