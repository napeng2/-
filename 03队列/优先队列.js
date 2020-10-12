function PrioritQueue() {
    //在PrioritQueue里面创建一个类，可以理解是內部类
    function QueueElement(element,priority) {
        this.element=element;
        this.priority=priority;
    }
    //封装属性
    this.item=[];
    //实现传入方法
    PrioritQueue.prototype.enqueue=function (element,priority) {
        var queue_element=new QueueElement(element,priority);
        if (this.item.length==0)
        {
            this.item.push(queue_element)
        }
        else{
            for(var i=0;i<this.item.length;i++)
            {  
                var addIf=false
                if (queue_element.priority<this.item[i].priority)
                {
                    this.item.splice(i,0,queue_element)
                    addIf=true
                    break
                }
            }
            if(addIf===false)
            {
                this.item.push(queue_element)
            }
            
        }
    }
    PrioritQueue.prototype.dequeue=function () {
        return this.item.shift();
    }
    PrioritQueue.prototype.front=function () {
        return this.item[0]
    }
    PrioritQueue.prototype.isEmpty=function () {
        return this.item.length==0
    }
    PrioritQueue.prototype.size=function () {
        return this.item.length
    }
    PrioritQueue.prototype.Printf=function () {
        console.log(this.item);
    }
}
var Queue=new PrioritQueue()
Queue.enqueue("小楼",5)
Queue.enqueue("小米",1)
Queue.enqueue('小坏',3)
Queue.enqueue('李白',4)
Queue.Printf()