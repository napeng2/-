function ArrayQueue() {
  this.items=[]
  //1、将任务添加到队列中
  ArrayQueue.prototype.enqueue=function (element) {
      this.items.push(element)
      // console.log(this);
  }
  //2、从队列中删除前端元素
  ArrayQueue.prototype.dequeue=function () {
      return this.items.shift()
  }
  //3、查看前端元素
  ArrayQueue.prototype.front=function () {
      return this.items[0]
  }
  //4、查看队列是否为空
  ArrayQueue.prototype.isEmpty=function () {
      return this.items.length==0
  }
  //5、查看队列长度
  ArrayQueue.prototype.size=function () {
      return this.items.length
  }
  //6、toString
  ArrayQueue.prototype.toString=function () {
      return arr.join("")
  }
}
var queue=new ArrayQueue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
console.log(queue.size());