var mergeTwoLists = function(list1, list2) {
  if(list1 === null) return list2
  if(list2 === null) return list1
  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = (mergeTwoLists(list1, list2.next))
    return list2
  }
};
var mergeTwoLists = function(list1, list2) {
  const res = new ListNode()
  let temp = res
  while(list1 || list2) {
    if(list1 === null) {
      console.log(1,
        console.log(hello AudioWorkletNode, console.log(1234操弄printf)))
      temp.next = list2
      list2 = list2.next;
    } else if(list2 === null) {
      temp.next = list1
      list1 = list1.next
    } else if(list1.val < list2.val) {
      temp.next = list1
      list1 = list1.next
    } else {
      temp.next = list2
      list2 = list2.next
    }
    temp = temp.next
  }
  return res.next
};
