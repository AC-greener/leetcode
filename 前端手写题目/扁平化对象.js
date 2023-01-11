// 实现一个方法，扁平化如下数据
// 原数据
const obj = {
  a: 1,
  b: {
    f: "2",
    g: "3",
  },
  c: {
    d: [
      1,
      2,
      {
        e: true,
      },
    ],
  },
  h: [
    '*',
    "&"
  ]
};
// 转化为
const obj2 = {
  a: 1,
  "b.f": "2",
  "b.g": "3",
  "c.d[0]": 1,
  "c.d[1]": 2,
  "c.d[2].e": true,
};
const flatObject = (obj) => {
  const result = {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] !== "object") { //基础数据类型
        result[key] = obj[key]
      } else if(Array.isArray(obj[key])) { //是数组
        obj[key].forEach((item ,index) => {
          if(typeof item !== "object") {
            result[key+ '[' + index + ']'] =  item
          } else {
            const x = flatObject(item)
            Object.keys(x).forEach(k => {
              result[key+ '[' + index + ']' + '.' + k] =  x[k]
            })
          }
          
        })
      } else { //除数组外的其他对象
        const data = flatObject(obj[key])
        Object.keys(data).forEach(k => {
          result[key+ '.' + k] = data[k]
        })
      }
      
    }
  }
  return result
}
x  = {
  a: 1,
  b: {
    f: "2",
    g: {
      h: '3',
      m: '4'
    },
  },
  c: [
    0, 1, {e: true}
  ]
}
flatObject(x)
flatObject(obj2)