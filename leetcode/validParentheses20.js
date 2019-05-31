const Stack = require("../Stack/stack_ES5");

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const left = "{[(";
//     const right = "}])";
//     const stack = new Stack();
    
//     let i = 0;
//     while(i < s.length) {
//         if(left.indexOf(s[i]) >= 0) {
//             stack.push(s[i]);
//         } else if(stack.isEmpty()) {
//             return false
//         } else {
//             const left_p = stack.pop();
//             if( left.indexOf(left_p) !== right.indexOf(s[i])) {
//                 return false
//             } 
//         }
//         i++
//     }
//     return stack.isEmpty()
// };


// var isValid = function(s) {
//     const parenth = new Map([[ "}", "{" ], [ ")", "(" ], ["]","["]]);

//     let index = 0;
//     const stack = new Stack();
//     while(index < s.length) {
//         const letter = s[index];
//         if(!parenth.has(letter)) {
//             stack.push(letter);
//         } else if (stack.isEmpty() || (stack.pop() !== parenth.get(letter))) {
//             return false
//         }

//         index++;
//     }
//     return stack.isEmpty();
// }

var isValid = function (s) {
    let length;
    do {
        length = s.length;
        s = s.replace(/\{\}/,"").replace(/\[\]/,"").replace(/\(\)/,"");
    } while (length !== s.length) 
    return s.length === 0;
}

console.log(isValid("{}"));