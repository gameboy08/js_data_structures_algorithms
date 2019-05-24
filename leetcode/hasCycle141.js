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
fourth.next = second;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//fast an slow pointer method
//Time: O(n)
// var hasCycle = function(head) {
//     let fast = head, slow = head;
//     while(fast && slow && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if(fast === slow) {
//             return true;
//         }
//     }
//     return false;
// };


//set method
// var hasCycle = function(head) {
//     let set = new Set();
//     let current = head;
//     while(current) {
//         if(set.has(current)) {
//             return true;
//         }
//         set.add(current);
//         current = current.next;
//     }

//     return false
// }

console.log(hasCycle(head));