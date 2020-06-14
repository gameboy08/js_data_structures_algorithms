//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);

one.next = two;
two.next = three;
// three.next = four;

var swapPairs = function(head) {
  if (head === null) {
    return null;
  } else if (head.next === null) {
    return head;
  }
  let prev = head;
  head = head.next;
  prev.next = head.next;
  head.next = prev;
  prev.next = swapPairs(prev.next);
  return head;
};

console.log(swapPairs(one));
