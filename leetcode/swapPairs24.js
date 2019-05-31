
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
     this.next = null;
}
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function(head) {
//     let current = head;
//     let prev;
//     let index = 1;
//     while(current) {
//         if(index === 1) {
//             prev = current;
//             current = current.next;
//             index++;
//         } else if (index === 2) {
//             [prev.val, current.val] = [current.val, prev.val];
//             current = current.next;
//             index = 1;
//         }
//     }
//     return head;
// };

var swapPairs = function(head) {
    let self = {};
    self.next = head;
    let prev = self;

    while(prev.next && prev.next.next) {
        let a = prev.next;
        let b = a.next;
        [prev.next, b.next, a.next] = [b, a, b.next]
        prev = a;
    }
    return self.next;
}


console.log(swapPairs(head));