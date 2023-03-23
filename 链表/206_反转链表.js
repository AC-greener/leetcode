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
 * 
 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */
// 在遍历链表时，将当前节点的 next\textit{next}next 指针改为指向前一个节点。
// 由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。


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

var reverseList = function(head) {
  let prev = null, current = head
  while(current != null) {
    let temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
};