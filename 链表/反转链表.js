/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null, current = head
  while (current != null) {
    let temp = current.next
    current.next = prev
    prev = current //前指针向后移动
    current = temp //当前指针后向移动
  }
  return prev
};