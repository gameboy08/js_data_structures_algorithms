/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     const hashmap = new Map();
//     nums.map((num, index) => {
//         hashmap.set(num, index);
//     })
//     let index = 0;
//     while (index < nums.length) {
//         const complement = target - nums[index];
//         if(hashmap.has(complement) && hashmap.get(complement) !== index) {
//             return [ index, hashmap.get(complement)];
//         }
//         index++;
//     }   
// }

var twoSum = function(nums, target) {
    const hashmap = new Map();
    let index = 0;
    while (index < nums.length) {
        let complement = target - nums[index];
        if (hashmap.has(complement)) {
            return [ hashmap.get(complement), index ];
        } else {
            hashmap.set(nums[index], index);
        }
        index++;
    }
}

console.log(twoSum( [1,3,4,2], 6))