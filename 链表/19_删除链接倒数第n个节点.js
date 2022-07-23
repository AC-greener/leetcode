var removeNthFromEnd = function(head, n) {
  if(head == null) return head;
  let length = 0, dummy = new ListNode()
  dummy.next = head
  while(head) {
    length++
    head = head.next
  }
    let i, cur = dummy
    for(i = 1; i < length - n + 1; i++) {
      cur = cur.next
    }
    cur.next = cur.next.next
    console.log(cur)
  return dummy.next
};

//双指针解法

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode()
  dummy.next = head
  let first = head, second = dummy
  while(n) {
    first = first.next
    n--
  }
  while(first) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
  console.log(second)
  return dummy.next
}
