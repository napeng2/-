function DoubleLinkList() {
    function Node(data) {
        this.data=data;
        this.prev=null;
        this.next=null;
    }
    this.head=null;
    this.tail=null;
    this.length=0;
    
    DoubleLinkList.prototype.append=function (data) 
    {
        var node =new Node(data);
        if(this.length===0)
        {
            this.head=node;
            this.tail=node;
        }
        else 
        {
        node.prev=this.tail;
        this.tail.next=node;
        this.tail=node;
       }
       this.length++;
        
    };
    DoubleLinkList.prototype.to_String=function () {

    };
    DoubleLinkList.prototype.forword_to_String=function () {
        let temp=this.head;
        let resString='';
        while(temp!=null)
        {
            resString+=temp.data+' ';
            temp=temp.next;
        }
        return resString
    };
    DoubleLinkList.prototype.back_to_String=function () {
        let temp=this.tail;
        let resString='';
        while(temp!=null)
        {
            resString+=temp.data+' ';
            temp=temp.prev;
        }
        return resString
    }
    
    
}
let list=new DoubleLinkList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
console.log(list.forword_to_String());
console.log(list.back_to_String());
