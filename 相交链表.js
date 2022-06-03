/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    const m = new Map()
    let a = headA, b = headB
    while(a != null) {
        m.set(a, true)
        a = a.next
    }
    while(b != null) {
        if(m.get(b) === true) {
            return b
        }
        b = b.next
    }
    return null
};
var getIntersectionNode = function(headA, headB) {
  if(headA  == null || headB == null) return null
  let a = headA, b = headB
  while(a != b) {
      a = a == null ? headB : a.next
      b = b == null ? headA : b.next
  }
  return a
}