/*

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
*/

var isAnagram = function(s, t) {
  let hash = new Array(26).fill(0)
  let base = 'a'.charCodeAt()
  for(let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - base]++
  }
  for(let i = 0; i < t.length; i++) {
    // if(!hash[t.charCodeAt(i) - base]) return false
    hash[t.charCodeAt(i) - base]--
  }
  for(let i = 0; i < 26; i++) {
    if(hash[i] !== 0) return false

  }
  return true
};

isAnagram('rat', 'carx')