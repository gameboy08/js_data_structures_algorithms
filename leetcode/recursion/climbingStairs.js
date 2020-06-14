// i is current step, n are total steps
//brute force method
function climbStairs(n) {
  return climb_stairs(0, n);
}
let memo = [];
function climb_stairs(i, n) {
  if (i > n) {
    return 0;
  }
  if (i == n) {
    return 1;
  }
  if (memo[i] > 0) {
    return memo[i];
  }
  memo[i] = climb_stairs(i + 1, n) + climb_stairs(i + 2, n);
  return memo[i];
}

console.log(climbStairs(3));

//dynamic programming
// function climbStairs(n) {
//   if (n === 1) {
//     return 1;
//   }
//   let dp = [];
//   dp[0] = 0;
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let i = 3; i < n + 1; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     console.log(`dp[${i}]`, dp[i]);
//   }
//   return dp[n];
// }
// console.log(climbStairs(6));
