function throttle(fn, delay) {
  let timer
  return function () {
    if (timer) {
      return
    }
    const context = this
    const args = arguments
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(context, args)
    }, delay)
  }
}

const counter = {
  value: 0,
  increment: function() {
    this.value++;
    console.log(this.value);
  }
};

// 我们创建了一个节流函数，并设置间隔为1000毫秒
const throttledIncrement = throttle(counter.increment, 1000);

// 在这个测试中，我们尝试在短时间内多次调用throttledIncrement
// 由于throttle函数的作用，即使我们调用了5次，也只应该每隔1秒执行一次
for (let i = 0; i < 5; i++) {
  throttledIncrement.call(counter, 1,2,3,4);
}

//
/*为什么要使用apply而不是call呢？
call 方法的传统用法是你必须明确地一个接一个地传递所有参数。但是，当参数的数量是未知的时候，这种方法就不那么有用了。
直接使用 fn.call(context, args) 并不会按照预期进行工作，如果 args 是一个数组或者类数组对象。call 方法期望接收参数列表，而不是单个数组参数，除非你的函数设计就是只接收一个数组作为唯一的参数。
如果使用 fn.call(context, args)，fn 函数会被调用， context 会被用作 this 上下文，但是 fn 会接收到一个单个的参数——就是整个 args 数组。如果 fn 需要接收多个参数，它就无法得到正确的每个具体参数。
这里是两者之间的区别：
fn.apply(context, args)：apply 会将 args 数组中的元素作为独立的参数传递给 fn。
fn.call(context, ...args)：使用展开操作符（...），call 也能像 apply 一样工作，将数组中的每个元素分别作为参数传递给 fn。
fn.call(context, args)：没有展开操作符，整个 args 数组作为单个参数传递给 fn。
所以，如果 fn 需要接收多个参数，正确的方式是使用 fn.call(context, ...args)， ... 展开操作符可以把 args 数组中的每个元素作为单独的参数传递。
*/