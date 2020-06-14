let cached = {};
function fib(n) {
  if (cached[n]) {
    return cached[n];
  }
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
