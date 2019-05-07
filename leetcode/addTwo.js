/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 要点：
 * 1. 单位数上相加的值 其实就是 sum % 10 余数
 * 2. 进位本身保存在sum中，留给下次循环使用。进位的计算就是 sum = sum / 10
 * 3. sum === 1 的唯一情况就是 结果的最开头需要进一位，也就是整个结果多一位。
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let current = node;
    let p1 = l1;
    let p2 = l2; 
    let sum = 0;
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
        //这里很巧妙, 不论有没有进位(1或0), 在下一次循环中, 进位就已经加上了, 加在上面的1 或 2处。
        //这里要用Math.floor, 不然结果可能会保留一位小数。
        sum = Math.floor( sum / 10 );
        current = current.next; //将结果换到下一位。
    }
    //如果p1, p2的最后一位都加完了，还需要进一位, 就需要在结果上多拓展一位
    if (sum === 1) {
        current.next = new ListNode(1);
    }
    //返回值丢弃了第一个0值。
    return node.next;
};