
/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/*
三种不匹配的情况
第一种情况，字符串里左方向的括号多余了 ，所以不匹配。
第二种情况，括号没有多余，但是 括号的类型没有匹配上
第三种情况，字符串里右方向的括号多余了，所以不匹配。
*/
// 思路：遇到左括号一直进栈， 遇到右括号出栈，从hash里面找是否匹配当前元素
var isValid = function(s) {
	const stask = []
	let hash = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	for(let i = 0; i < s.length; i++) {
		if(hash[s[i]]) { //遇到左括号一直进栈
			stask.push(s[i])
		} else {//遇到右括号出栈，从hash里面找是否匹配当前元素
			if(!(hash[stask.pop()] === s[i])){
				return false
			}
		}
	}
	return stask.length === 0 //判断情况1
};
isValid("([)]")
isValid("()[]{}")
isValid("()")
isValid("(]")

