// 虾皮面试题
// input 为string
// input 包含 字母, -,  _
// 连续的字母需要简写,  规则: 如果连续字母长度>2 首字母+中间长度+尾字母,  否则直接输出
// -, _ 需要正常输出
// jane-jack_jeffery -> j2e-j2k_j5y
// - _ 可能连续, 可能出现在input的任何地方
// 返回处理后的string
function abbr_plus(input) {
  let result = ''
  for (let i = 0; i < input.length; i++) {
    let j = i
    let splitFlag = ''
    while (input[j] !== '-' && input[j] !== '_' && j < input.length) {
      j++
    }
    let k = j
    while ((input[k] === '-' || input[k] === '_') && k < input.length) {
      splitFlag = input[k]
      k++
    }
    const wordStr = input.slice(i, j)
    const splitStr = input.slice(j, k)
    const x = handleString(wordStr)
    result = result + x + splitStr
    i = k - 1
  }
  return result
}
function handleString(str) {
  if(str.length <= 2) {
    return str
  }
  return str[0] + (str.length - 2) + str[str.length - 1]
}

abbr_plus('jane---jack__jeffery-hello_world-tt')
// abbr_plus('jane-jack_jeffery')