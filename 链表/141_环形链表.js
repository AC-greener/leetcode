/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

*/

 /* 
 要使用双指针技巧中的快慢指针，每当慢指针 slow 前进一步，快指针 fast 就前进两步。
  如果 fast 最终遇到空指针，说明链表中没有环；如果 fast 最终和 slow 相遇，那肯定是 fast 超过了 slow 一圈，说明链表中含有环。
 */

 var hasCycle = function(head) {
    const map = new Map()
    while(head != null) {
      if(map.has(head)) {
        return true
      }
      map.set(head, true)
      head = head.next
    }
    return false
};

var hasCycle = function(head) {
  if(!head || !head.next) return false
  let slow = head
  let fast = head.next
  while(slow != fast) {
    if(!fast || !fast.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
var hasCycle = function (head) {
  const map = new Map()
  while (head != null) {
    if (map.has(head)) {
      return true
    }
    map.set(head, true)
    head = head.next
  }
  return false
};

var hasCycle = function (head) {
  if (!head || !head.next) return false
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
};