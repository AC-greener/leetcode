// 1234567.90 => 1,234,567.90
// 1234567.9012 => 1,234,567.901,2
function convert(number) {
  let hasNav = false
  if(number.toString().includes('-')) {
    hasNav = true;
    number = number.toString().slice(1)
  }
  // console.log(number.toString())
  const [prefix, subfix] = number.toString().split(".");
  let subfixResult = "";
  if (subfix) {
    for (let i = 0; i < subfix.length; i++) {
      if (i > 0 && i % 3 === 0) {
        subfixResult += ",";
      }
      subfixResult += subfix[i];
    }
  }

  // console.log('subfixResult', subfixResult)
  let prefixResult = "";
  for (let i = prefix.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== prefix.length - 1) {
      prefixResult = "," + prefixResult;
    }
    prefixResult = prefix[i] + prefixResult;
  }
  // console.log('prefixResult', prefixResult)
  const result = subfix ? `${prefixResult}.${subfixResult}` : prefixResult;
  return hasNav ? ('-' + result) : result
}
// convert(-1234567.90)
convert(1234567)
