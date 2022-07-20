var removeNthFromEnd = function(head, n) {
  if(head == null) return head;
  let length = 0, cur = head, next = null
  while(cur) {
    length++
    cur = cur.next
  }
  if(length == 0) {
    head = head.next;
  } else {
    cur = head
    let target = length - n + 1
    for(let i = 1; i < target - 1; i++) {
      cur = cur.next
    }
    cur.next = cur.next.next
  }
  return head
};