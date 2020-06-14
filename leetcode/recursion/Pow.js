//1. brute method
// function myPow(x, n) {
//   let exp = n;
//   let base = x;
//   if (n < 0) {
//     exp = -exp;
//     base = 1 / base;
//   }
//   let acc = 1;
//   for (let i = 0; i < exp; i++) {
//     acc *= base;
//   }
//   return acc;
// }

//2. recursion (fast power)
// function fastPow(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   let half = fastPow(x, Math.floor(n / 2));
//   if (n % 2 === 0) {
//     return half * half;
//   }
//   if (n % 2 !== 0) {
//     return half * half * x;
//   }
// }
// function myPow(x, n) {
//   let exp = n;
//   let base = x;
//   if (n < 0) {
//     exp = -exp;
//     base = 1 / base;
//   }
//   return fastPow(base, exp);
// }

//3
function myPow(x, n) {
  let base = x;
  let exp = n;
  if (n < 0) {
    exp = -n;
    base = 1 / base;
  }
  let result = 1;
  while (exp !== 0) {
    if ((exp & 1) === 1) {
      result *= base;
    }
    //更新下一位的base，如1次方变二次方，二次方变三次方
    base *= base;
    //将exp二进制向右移动一位，方便 后面检验这一位是不是1.
    exp = exp >>> 1;
  }
  return result;
}

console.log(myPow(2, -3));
