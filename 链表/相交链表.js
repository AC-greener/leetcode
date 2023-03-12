/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * 简单来说，就是求两个链表交点节点的指针。 这里同学们要注意，交点不是数值相等，而是指针相等。
 */
//使用map来保存节点，
var getIntersectionNode = function (headA, headB) {
  const m = new Map();
  let a = headA,
    b = headB;
  while (a != null) {
    m.set(a, true);
    a = a.next;
  }
  while (b != null) {
    if (m.get(b) === true) {
      return b;
    }
    b = b.next;
  }
  return null;
};

/*
// 根据题目意思 如果两个链表相交，那么相交点之后的长度是相同的

// 我们需要做的事情是，让两个链表从同距离末尾同等距离的位置开始遍历。这个位置只能是较短链表的头结点位置。 为此，我们必须消除两个链表的长度差

// 指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
// 如果 pA 到了末尾，则 pA = headB 继续遍历
// 如果 pB 到了末尾，则 pB = headA 继续遍历
// 比较长的链表指针指向较短链表head时，长度差就消除了
// 如此，只需要将最短链表遍历两次即可找到位置

图示：https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/10774/tu-jie-xiang-jiao-lian-biao-by-user7208t/
*/
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let a = headA,
    b = headB;
  while (a != b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }
  return a;
};
