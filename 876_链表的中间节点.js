var middleNode = function(head) {
  let slow = fast = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};

var middleNode = function(head) {
  let n = 0, cur = head
  while(cur) {
    n++
    cur = cur.next
  }
  let k = 0
  cur = head
  let x 
  if(n % 2 === 0) {
    x = n / 2
  } else {
    x = Math.ceil( n / 2)
  }
  while(k < x) {
    k++
    cur = cur.next
  }
  return cur
};