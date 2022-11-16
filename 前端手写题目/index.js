{
  // 1. 手写 Object.create
  // Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。
  function create(obj) {
    const F = function() {

    }
    F.prototype = obj;
    return new F()

  }
}
{
  //手写new
  function myNew(fn) {
    if (typeof fn !== "function") {
      return;
    }
    let obj = {}
    obj = Object.create(fn)
    let result = fn.apply(obj, [].slice.call(arguments, 1))
    return typeof result ==='object' || typeof result === 'function' ? result: obj
  }
}
