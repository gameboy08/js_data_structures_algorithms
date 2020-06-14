function ListNode(val) {
  this.val = val;
  this.next = null;
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);
let five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const p = reverseList(head.next); //循环移动head的方法
  head.next.next = head;
  head.next = null;
  return p;
};
