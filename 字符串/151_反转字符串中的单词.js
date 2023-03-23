/*

给你一个字符串 s ，请你反转字符串中 单词 的顺序。
单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

示例 1：
输入：s = "the sky is blue"
输出："blue is sky the"
示例 3：

输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。

*/


var reverseWords = function(s) {
  return s.split(' ').filter(Boolean).reverse().join(' ')
};

/*
想一下，我们将整个字符串都反转过来，那么单词的顺序指定是倒序了，只不过单词本身也倒序了，那么再把单词反转一下，单词不就正过来了。

所以解题思路如下：

移除多余空格
将整个字符串反转
将每个单词反转
举个例子，源字符串为："the sky is blue "

移除多余空格 : "the sky is blue"
字符串反转："eulb si yks eht"
单词反转："blue is sky the"
*/

var reverseWords = function(s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;

  for(let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join('');
};

// 双指针删除多余空格
function removeExtraSpaces(strArr) {
 let slowIndex = 0;
 let fastIndex = 0;

 while(fastIndex < strArr.length) {
   // 移除开始位置和重复的空格
   if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
     fastIndex++;
   } else {
     strArr[slowIndex++] = strArr[fastIndex++];
   }
 }

 // 移除末尾空格
 strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
 let left = start;
 let right = end;

 while(left < right) {
   // 交换
   [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
   left++;
   right--;
 }
}