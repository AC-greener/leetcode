var detectCycle = function(head) {
  const map = new Map()
  while(head != null) {
    if(map.has(head)) {
      return head
    }
    map.set(head, true)
    head = head.next
  }
  return null
};

var detectCycle = function(head) {
  let fast = head, slow = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if(slow === fast) break //有环
  }
  if(fast == null || fast.next == null) {
    return null
  }
  slow = head
  while(slow != fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}