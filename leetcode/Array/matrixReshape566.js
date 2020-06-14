// var matrixReshape = function (nums, r, c) {
//   const numOfEle = nums.length * nums[0].length;
//   if (r * c !== numOfEle) {
//     return nums;
//   }

//   const allEles = nums.reduce((acc, cur) => {
//     return [...acc, ...cur];
//   }, []);
//   let newArr = [];
//   let tempArr = [];
//   allEles.forEach((ele, index) => {
//     tempArr.push(ele);
//     if ((index + 1) % c === 0) {
//       newArr.push(tempArr);
//       tempArr = [];
//     }
//   });
//   return newArr;
// };

var matrixReshape = function (nums, r, c) {
  const numOfEle = nums.length * nums[0].length;
  if (r * c !== numOfEle) {
    return nums;
  }
  const spreads = [].concat(...nums);
  let result = []
  for(let i = 0; i < r; i++) {
      result.push(spreads.splice(0, c))
  } 
  return result
};

const nums = [
  [1, 2],
  [3, 4],
];

const result = matrixReshape(nums, 1, 4);
console.log("result", result);
