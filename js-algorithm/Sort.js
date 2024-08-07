function ArrayList() {
  var array = [];

  this.insert = function (item) {
    console.log(item)
    array.push(item);
  };

  this.toString = function () { //{3}
    return array.join();
  };

  var swap = function (array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  //冒泡排序，主要思想，从数组的第一项开始依次与下一项作比较，如果后者大于前者，则交换两元素位置
  this.bubbleSort = function () {
    var length = array.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }

  //优化冒泡排序
  this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) { //{1}
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  //选择排序，每次寻找数组中最小或最大的数，然后数组的第一项交换
  this.selectSort = function () {
    var length = array.length,
      minIndex;
    for (var i = 0; i < length - 1; i++) {
      minIndex = i //假设每次迭代的第一个元素最小
      for (var j = i; j < length; j++) {
        if (array[minIndex] > array[j]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, minIndex, i)
      }
    }
  }

  //插入排序
  this.insertionSort = function () {
    var length = array.length, //{1}
      j, temp;
    for (var i = 1; i < length; i++) { //{2}
      j = i; //{3}
      temp = array[i]; //{4}
      while (j > 0 && array[j - 1] > temp) { //{5}
        array[j] = array[j - 1]; //{6}
        j--;
      }
      array[j] = temp; //{7}
    }
  };

  //归并排序
  /*归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
  个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
  */
  this.mergeSort = function () {
    array = mergeSortRec(array);
  };
  var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) { //{1}
      return array; //{2}
    }
    var mid = Math.floor(length / 2), //{3}
      left = array.slice(0, mid), //{4}
      right = array.slice(mid, length); //{5}
    return merge(mergeSortRec(left), mergeSortRec(right)); //{6}
  };
  var merge = function (left, right) {
    var result = [], // {7}
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) { // {8}
      if (left[il] < right[ir]) {
        result.push(left[il++]); // {9}
      } else {
        result.push(right[ir++]); // {10}
      }
    }
    while (il < left.length) { // {11}
      result.push(left[il++]);
    }
    while (ir < right.length) { // {12}
      result.push(right[ir++]);
    }
    return result; // {13}
  };

  //计数排序，用一个hash来存储排序的结果，吧数组出现的数字作为hash的key，吧该数字出现的次数记为value
  var countSort = function (arr) {
    var i = 0,
      length = arr.length,
      hash = {}
    while (i < length) {
      if (hash[arr[i]] === undefined) {
        hash[arr[i]] = 1
      } else {
        hash[arr[i]]++
      }
      i++
    }
    console.log(hash)
    return hash
  }
  countSort([1, 2, 2, 6, 1, 7, 2])

}
var swap = function (array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]]
}

//快速排序
// 快速排序是先将一个元素排好序，然后再将剩下的元素排好序。
// 快速排序的核心无疑是 partition 函数， partition 函数的作用是在 nums[lo..hi] 中寻找一个分界点 p，
// 通过交换元素使得 nums[lo..p-1] 都小于等于 nums[p]，且 nums[p+1..hi] 都大于 nums[p]

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
quickSort(arr, 0, arr.length - 1)
console.log('quickSort(arr, 0, arr.length - 1) :>> ', quickSort(arr, 0, arr.length - 1));


var xxx = [2, 3, 1, 0, 9, 9, 8]

quickSort(xxx, 0, 6)