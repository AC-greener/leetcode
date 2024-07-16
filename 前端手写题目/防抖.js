function debounce(fn, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    const context = this
    const args = arguments
    timer = setTimeout(() => {
      // 注意必须要传递context
      fn.apply(context, args)
    }, delay)
  }
}

const counter = {
  value: 0,
  increment: function() {
    console.log(this.value); // 正确的this指向counter对象
    this.value++;
  }
};

// 以对象的方法形式创建防抖函数
counter.debouncedIncrement = debounce(counter.increment, 1000);

// 我们的debouncedIncrement现在是绑定到counter对象的
counter.debouncedIncrement(); // 正确的输出0
