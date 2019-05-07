const Stack = require("./stack_weakMap_closure")
function divideBy2(decNumber) {
    let stack = new Stack(),
        rem,
        binaryString = "";
    
    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        stack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    while(!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    
    return binaryString;
}

console.log(divideBy2(10))

function baseConverter(decNumber, base) {
    let stack = new Stack(),
        rem,
        baseString = "",
        digits = "0123456789ABCDEF"
    
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        stack.push(rem);
        decNumber = Math.floor(decNumber / base)
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()]
    }
    return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
