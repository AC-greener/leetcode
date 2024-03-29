
/*

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

*/
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2
    if(list2 === null) return list1
    if(list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
    } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
    }
  };

  var mergeTwoLists = function(list1, list2) {
    const res = new ListNode()
    let temp = res
    while(list1 || list2) {
      if(list1 === null) {
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
