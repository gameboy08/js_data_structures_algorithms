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


//Time: O(n)  Space: O(n)
// var detectCycle = function(head) {
//     let map_data = new Map();
//     let current = head;
//     let index = 0;
//     while (current) {
//         if(map_data.has(current)) {
//             return current;
//         }
//         map_data.set(current, index);
//         index++;
//         current = current.next;
//     }
//     return null
// };

// Time: O(n) Space: O(n)
var detectCycle = function(head) {
    let set = new Set();
    let current = head;
    while (current) {
        if(set.has(current)) {
            return current;
        }
        set.add(current);
        current = current.next;
    }
    return null
};

 
//fast and slow method
//if we draw a diagram, we will find that the node that head and slow meet is the start point of the loop.
//Time: O(n)  Space: O(1)
function detectCycle(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            while(head !== slow){
                head = head.next
                slow = slow.next
            }
            return head
        }
    }
    return null;
}
console.log(detectCycle(head));