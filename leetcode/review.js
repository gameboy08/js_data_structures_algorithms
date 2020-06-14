function pow(x, n) {
  let base = x;
  let exp = n;
  if (n < 0) {
    base = 1 / base;
    exp = -exp;
  }

  if (exp === 0) {
    return 1;
  }
  if (exp % 2 !== 0) {
    return (
      pow(base, Math.floor(exp / 2)) * pow(base, Math.floor(exp / 2)) * base
    );
  } else {
    return pow(base, exp / 2) * pow(base, exp / 2);
  }
}

function fastPow(x, n) {
  let base = x;
  let exp = n;
  if (n < 0) {
    base = 1 / base;
    exp = -exp;
  }
  let result = 1;
  while (exp !== 0) {
    if ((exp & 1) === 1) {
      result *= base;
    }
    exp = exp >> 1;
    base *= base;
  }
  return result;
}

console.log(pow(2, -3));
console.log(fastPow(2, 3));
