
/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var isValid = function(s) {
	const stask = []
	let hash = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	for(let i = 0; i < s.length; i++) {
		if(hash[s[i]]) {
			stask.push(s[i])
		} else {
			if(!(hash[stask.pop()] === s[i])){
				return false
			}
		}
	}
	return stask.length === 0
};
isValid("([)]")
isValid("()[]{}")
isValid("()")
isValid("(]")