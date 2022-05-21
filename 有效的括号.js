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