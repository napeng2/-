function ArrayQueue() {
    var items=[];
    //1、将任务添加到队列中
    ArrayQueue.prototype.enqueue=function (element) {
        items.push(element)
    };
    //2、从队列中删除前端元素
    ArrayQueue.prototype.dequeue=function () {
        return items.shift()
    };
    //3、查看前端元素
    ArrayQueue.prototype.front=function () {
        return items[0]
    };
    //4、查看队列是否为空
    ArrayQueue.prototype.isEmpty=function () {
        return items.length==0
    };
    //5、查看队列长度
    ArrayQueue.prototype.size=function () {
        return items.length
    };
    //6、toString
    ArrayQueue.prototype.toString=function () {
        return arr.join("")
    }
}
    function Game(arr,number) {
        var List = new ArrayQueue();
        for (var i = 0; i < arr.length; i++) {
            List.enqueue(arr[i]);
        }
        while (List.size() > 1) {
            for (var i = 0; i < 7; i++) {
                List.enqueue(List.dequeue())
            }
            console.log(List.dequeue()+'已经淘汰！');
        }
        console.log(List.dequeue()+'获胜！');
    }
var arr=['小米','小张','小楼','小环','小花','刘鑫'];
Game(arr,7);