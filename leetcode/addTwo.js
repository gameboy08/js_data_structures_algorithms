/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(2);
l1_current = l1;
l1_current.next = new ListNode(4);
l1_current = l1_current.next;
l1_current.next = new ListNode(3);
console.log(l1);

let l2 = new ListNode(5);
l2_current = l2;
l2_current.next = new ListNode(6);
l2_current = l2_current.next;
l2_current.next = new ListNode(4);

console.log(l2);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Notes：
 * 1. Each result digit is the modulo "sum % 10"
 * 2. The "carry" in each result digit in each iteration is kept in "sum" which will be used in the next iteration. 
 *    The algorithm for calculating "carry" is sum = sum / 10
 * 3. The only situation when "sum === 1" is when adding the two most significant digits of the inputs results in a carry, 
 *    which means there will be one more digit (1) on the result digit as the most-significant digit
 */

//Runtime: 140 ms, faster than 45.28% of JavaScript online submissions for Add Two Numbers.
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); //store as the result; start with an unwanted 0 as initial head.
    let current = dummyHead;
    let p1 = l1; 
    let p2 = l2; 
    let sum = 0; //to save the sum of two digits, and then save the carry to itself.
    while (p1 !== null || p2 !== null ) {
        if(p1 !== null) {
            sum += p1.val; //1
            p1 = p1.next;
        }
        if(p2 !== null) { //2
            sum += p2.val;
            p2 = p2.next;
        }
        current.next = new ListNode(sum%10);
        //calculating the carry that will be used in the next turn.
        //Math.floor is needed, otherwise the "sum" may reserve a decimal.
        sum = Math.floor( sum / 10 );
        current = current.next; //将结果换到下一位。
    }
    //After exhausting the iteration, if we still got a carry, extend the result one more digit as the most-significant digit
    if (sum === 1) {
        current.next = new ListNode(1);
    }
    //because we start with an unwanted 0, so return from the "next".
    return dummyHead.next;
};

console.log(addTwoNumbers(l1, l2));

//Runtime: 112 ms, faster than 100.00% of JavaScript online submissions for Add Two Numbers.
var addTwoNumbers2 = function (l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let p1 = l1, p2 = l2;
    let sum = 0, carry = 0;
    while (p1 !== null || p2 !== null || sum > 0) {
        if (p1 !== null) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            sum += p2.val;
            p2 = p2.next;
        }

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        current.next = new ListNode(sum);
        current = current.next;
        sum = carry;
        carry = 0
        
    }
    return dummyHead.next;
}

console.log(addTwoNumbers2(l1, l2));