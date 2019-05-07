// @ts-check
const Stack = require("./stack_weakMap_closure")

function parenthesesChecker(symbols) {
    const stack = new Stack(),
    opens = '([{',
    closers = ')]}';
    let index = 0,
    balanced = true,
    symbol,
    top

    while ( (index < symbols.length) && balanced) {
        symbol = symbols[index]
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol)
        } else if (stack.isEmpty()) {
            balanced = false
        } else {
            top = stack.pop()
            if ( !(opens.indexOf(top) === closers.indexOf(symbol)) ) {
                balanced = false
            }
        }
        index++
    }
    return balanced && stack.isEmpty();
}

// function parenthesesChecker(symbols) {
//   const stack = new Stack();
//   const opens = '([{';
//   const closers = ')]}';
//   let balanced = true;
//   let index = 0;
//   let symbol;
//   let top;

//   while (index < symbols.length && balanced) {
//     symbol = symbols[index];
//     if (opens.indexOf(symbol) >= 0) {
//       stack.push(symbol);
//     } else if (stack.isEmpty()) { //是为了防止closer先出现。
//       balanced = false;
//     } else { //没出现在opens，看看有没有出现在closers
//       top = stack.pop();
//       if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
//         balanced = false;
//       }
//     }
//     index++;
//   }
//   return balanced && stack.isEmpty();
// }

// console.log('{([])}', parenthesesChecker('{([])}')); // true
// console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
// console.log('[{()]', parenthesesChecker('[{()]')); // false
console.log('{',parenthesesChecker('{'))