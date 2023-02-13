
/*
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]


思路：由于互为字母异位词的两个字符串包含的字母相同，因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
故可以将排序之后的字符串作为哈希表的键。
*/

var groupAnagrams = function(strs) {
  let map = new Map()
  for(let index in strs) {
    let str = strs[index]
    let key = str.split('').sort().join()
    let list = map.get(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])