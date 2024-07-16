
function quickSort(arr, left, right) {
  if(left >= right) return
  const index = divide(arr, left, right)
  quickSort(arr, left, index - 1)
  quickSort(arr, index, right)
  return arr
}
function divide(arr, left, right){
//找一个mid，把小于arr[mid]的变量放在左边，大于arr[mid]的变量放在右边
  const midIndex =  Math.floor((right + left) / 2)
  let i = left, j = right
  while(i <= j) {
    //从左往右找到大于arr[midIndex]的值
    while(i < right && arr[i] < arr[midIndex]) {
      i++
    }

    while(j > left && arr[j] > arr[midIndex]) {
      j--
    }
    if(i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
      j--;
    }
  }
  return i
}


let arr = [2, 1, 3, 4, 0]
// quickSort(arr, 0, arr.length - 1)
var xxx = [2, 3, 1, 0, 9, 9, 8]

console.log('quickSort(xxx, 0, 6) :>> ', quickSort(xxx, 0, 6));
// console.log('quickSort(arr, 0, arr.length - 1) :>> ', quickSort(arr, 0, arr.length - 1));