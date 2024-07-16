function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    console.error('fn 必须是一个函数')
    return
  }
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  const isObject = typeof res === 'object' && res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj

}


function Bar(age) {
  this.name = 'zhangsan'
  this.age = age
  console.log(age)
}
Bar.prototype.car = 'xiami'

let a = myNew(Bar, 18)
console.log(a)