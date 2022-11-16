// Vue3的keepalive组件就用了这个LRU管理组件的缓存。   LRU (最近最少使用) 
var LRUCache = function (capacity) {
  this.map = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key)
    // 重新set，相当于更新到 map最后
    this.map.delete(key)
    this.map.set(key, value)
    return value
  }

  return -1
}

LRUCache.prototype.put = function (key, value) {
  // 如果有，就删了再赋值
  if (this.map.has(key)) {
    this.map.delete(key)
  }

  this.map.set(key, value)

  // 判断是不是容量超了，淘汰机制
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
}

