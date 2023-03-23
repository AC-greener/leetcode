// Vue3的keepalive组件就用了这个LRU管理组件的缓存。   LRU (最近最少使用) 
// 在构造函数中，声明一个容量为 capacity 的 Map 对象，用于存储缓存数据。
// 在 get 方法中，如果 map 中存在该 key，则将其对应的 value 取出并重新 set 到 map 中，在 LRUCache 中它就成了最近被使用的条目。
// 如果 map 中不存在该 key，则返回 -1，表示未找到。
// 在 put 方法中，先判断 map 中是否已经存在该 key。如果存在，则删除原有的 key-value，再将新的 key-value 存入 map 中，并在 LRUCache 中将该条目更新为最近被使用的条目。
// 如果 map 的 size 已经超过了 capacity，则删除 map 最久未被使用的一条数据（即第一个元素），以保证 map 的容量不会超过设定的 capacity。
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

