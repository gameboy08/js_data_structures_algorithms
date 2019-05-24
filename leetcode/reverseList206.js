//206. Reverse Linked List


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
var reverseList = function(head) {
    
    let current = head;
    let prev = null;
    while (current) {
        // let save = current.next;
        // current.next = prev;
        // prev = current;
        // current = save;
        [current.next, prev, current] = [prev, current, current.next];
    }

    return prev
};

reverseList(head);