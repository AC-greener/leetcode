// 写一个函数，算出两个数组的补集，数组只包含字符串和数字。
// （补集：如果 b 是 a 的子集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合）

function fn(a, b) {
  const result = [];
  a.forEach(() => {
    b.forEach((itemB) => {
      if (!a.includes(itemB)) {
        result.push(itemB);
      }
    });
  });
  return result;
}

//请实现红绿灯效果，使用console 输出 "红"、"绿"、"黄"示意，等待时间分别为 3s、2s、1s。
// （效果为，1-3 秒每秒打印一次“红”，4-5 秒每秒打印一次 “绿”，第6秒打印一次“黄”。一直重复执行）（10分）
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
const task = (timer, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color === "red") {
        red();
      } else if (color === "green") {
        green();
      } else if (color === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
}
function runTask() {
  task(3000, 'red')
    .then(() => task(2000, 'green'))
    .then(() => task(1000, 'yellow'))
    .then(runTask)
}
runTask()
