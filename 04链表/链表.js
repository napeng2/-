// function LinkedList() {
//     function Node(data) {
//         this.data=data
//         this.next=null
//     }
//     this.head=null
//     this.length=0
//     LinkedList.prototype.append=function (data) {
//         var node=new Node(data)
//         if(this.length==0)
//         {
//             this.head=node
//         }
//         else{
//             var temp=this.head
//             while(temp.next!=null)
//             {
//                 temp=temp.next
//             }
//             temp.next=node
//         }
//         this.length++
//     }
//     LinkedList.prototype.ToString=function () {
//         var temp=this.head
//         var ListString=''
//         while (temp)
//         {
//             ListString+=temp.data+' '
//             temp=temp.next
//         }
//         return ListString
//     }
//     LinkedList.prototype.insert=function (position,data) {
//         if(position<0||position>this.length)
//         {
//             return false
//         }
//         var node=new Node(data)
//         var temp=this.head
//         var preNode=null
//         if(position==1)
//         {
//             node.next=temp
//             this.head=node
//             return
//         }
//         for(var i=0;i<position-1;i++)
//         {
//             preNode=temp
//             temp=temp.next
//         }
//         node.next=temp
//         preNode.next=node

//     }
//     LinkedList.prototype.GetElement=function (posistion) {
//         var temp=this.head
//         if(posistion<0||posistion>this.length)
//         {
//             return false
//         }

//         for(var i=0;i<posistion-1;i++)
//         {
//             temp=temp.next
//         }
//         return temp.data
//     }
//     LinkedList.prototype.indexOf=function (element) {
//         var temp=this.head

//         for(var i=0;i<this.length;i++)
//         {
//             if(temp.data==element)
//             {
//                 return i+1
//             }
//             temp=temp.next
//         }
//         return -1

//     }
//     LinkedList.prototype.Update=function (posistion,element) {
//         var temp=this.head
//         if(posistion<0||posistion>this.length)
//         {
//             return false
//         }

//         for(var i=0;i<posistion-1;i++)
//         {
//             temp=temp.next
//         }
//          temp.data=element
//     }
//     LinkedList.prototype.removeAt=function (position) {
//         var temp=this.head
//         var preNode=null
//         if(position<0||position>this.length)
//         {
//             return false
//         }
//         if(position==1)
//         {
//             this.head=temp.next
//         }
//         else{
//             for (var i=0;i<position-1;i++)
//             {
//                 preNode=temp
//                 temp=temp.next
//             }
//             preNode.next=temp.next
//             return true
//         }
//     }
// }
// var List=new LinkedList()
// List.append('纳鹏')
// List.append('张飞')
// List.append('战云')
// List.append('伙计')
// List.append("xiao")
// console.log(List.removeAt(3));
// console.log(List.ToString());

// 构造函数:封装要给单向链表
function List() {
  // 创建新节点
  function Node(element) {
    this.data = element
    this.next = null
  }
  this.head = null
  this.length = 0

  // 向链表中加入新元素
  List.prototype.append = function (element) {
    let newNode = new Node(element)
    if (this.length === 0) {
      this.head = newNode
    }
    else {
      let item = this.head
      while (item.next != null) {
        item = item.next
      }
      item.next = newNode
    }
    this.length++
  }

  // 将元素插入特定的位置中
  List.prototype.Insert = function (position, element) {
    let item = this.head
    if (position > this.length) {
      return new Error('插入位置超出链表长度')
    }
    let newNode = new Node(element)
    if (position === 1) {
      newNode.next = item
      item.next = newNode
    }
    else {
      for (let i = 1; i < this.length; i++) {
        if ((i + 1) === position) {
          newNode.next = item.next
          item.next = newNode
          this.length++
          return
        }
        item = item.next
      }
    }
  }

  // 返回链表的长度
  List.prototype.size = function () {
    return this.length

  }

  // 以字符串的形式输出链表所有元素
  List.prototype.Output = function () {
    if (this.length === 0) {
      return -1
    }
    let str = ''
    let item = this.head
    for (let i = 0; i < this.length; i++) {
      str += item.data + ','
      console.log(item.data);
      item = item.next
    }
    return str
  }

  // 删除特定位置的元素
  List.prototype.Delete=function(position){
    if (position>this.length) {
      return new Error('删除的元素的位置超出链表的长度')
    }
    let item=this.head
    
    if (position===1) {
      this.head=item.next
    }
    else{
      for(let i=1;i<this.length;i++)
      {
        if ((i+1)===position) {
          item.next=item.next.next
               
        }
        item=item.next
      }
    }
    this.length--
  }
  
}

let list = new List()
list.append('纳鹏1')
list.append('纳鹏2')
list.append('纳鹏4')
console.log(list.size());
console.log(list.Output());
list.Insert(3, '纳鹏3')
console.log(list.size());
console.log(list.Output());

list.Delete(2)
console.log(list.Output());
