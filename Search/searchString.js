
function searchString (str, target) {
    let matchCounter = 0;
    for(let i = 0; i < str.length; i++) {
        let characterCounter = 0;
        for(let j = i; j-i < target.length; j++) {
            if(str[j] !== target[j-i]) {
                break;
            }
            characterCounter++;
        }
        if(characterCounter === target.length) {
            matchCounter++;
        }
    }
    return matchCounter;
}

const str = 'abcdefghijklmn'
const target = 'klm'
const result = searchString(str, target);
console.log('result', result)