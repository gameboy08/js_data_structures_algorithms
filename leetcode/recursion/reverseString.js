function printReverse(str) {
  helper(0, str);
}

function helper(index, str) {
  if (str === null || index >= str.length) {
    return;
  }
  helper(index + 1, str);
  console.log(str[index]);
}

printReverse("abc");
