/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(null)
  let p = result
  //进位
  let carry = 0
  while(l1 != null || l2 != null || carry > 0) {
    let val = carry
    if(l1 != null) {
      val += l1.val
      l1 = l1.next
    }
    if(l2 != null) {
      val += l2.val
      l2 = l2.next
    }
    p.next = new ListNode(val % 10)
    p = p.next
    carry = Math.floor(val / 10)
  }
  return result.next
};