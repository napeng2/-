//封装二叉搜索树

function BinarySerachTree(key) {
  //创建新节点
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  this.root = null
  //向二叉树插入节点
  BinarySerachTree.prototype.Insert = function (key) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.InsertNode(this.root, newNode)
    }
  }
  // 递归插入
  BinarySerachTree.prototype.InsertNode = function (node, newNode) {
    //向左查找
    if (node.key > newNode.key) {
      //左节点是否为空
      if (node.left === null) {
        node.left = newNode
      } else {
        this.InsertNode(node.left, newNode)
      }
      // 向右查找
    } else {
      // 右节点是否为空
      if (node.right === null) {
        node.right = newNode
      }//不为空递归右子树 
      else {
        this.InsertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历,优先遍历左子树,直到左子树节点没有值,返回上一层,再遍历右子树
  BinarySerachTree.prototype.PreOrder = function (hander) {
    this.PreOrderNode(this.root, hander)
  }
  BinarySerachTree.prototype.PreOrderNode = function (node, hander) {
    if (node != null) {
      //处理节点值,调用回调函数保存当前的key
      hander(node.key)
      //一直遍历左子树
      this.PreOrderNode(node.left, hander)
      //处理右节点
      this.PreOrderNode(node.right, hander)
    }
  }

  // 中序遍历
  BinarySerachTree.prototype.MidOrder = function (hander) {
    this.MidOrderNode(this.root, hander)
  }
  BinarySerachTree.prototype.MidOrderNode = function (node, hander) {
    if (node != null) {
      //一直遍历左子树
      this.MidOrderNode(node.left, hander)
      //处理节点值,调用回调函数保存当前的key
      hander(node.key)
      //处理右节点
      this.MidOrderNode(node.right, hander)
    }
  }

  // 后续遍历
  BinarySerachTree.prototype.PostOrder = function (hander) {
    this.PostOrderNode(this.root, hander)
  }
  BinarySerachTree.prototype.PostOrderNode = function (node, hander) {
    if (node != null) {
      //一直遍历左子树
      this.PostOrderNode(node.left, hander)
      //处理右节点
      this.PostOrderNode(node.right, hander)
      //处理节点值,调用回调函数保存当前的key
      hander(node.key)
    }
  }

  // 查询最大值
  BinarySerachTree.prototype.Max = function () {
    let node = this.root
    let key
    while (node != null) {
      key = node.key
      node = node.right
    }
    return key
  }

  // 查询最小值
  BinarySerachTree.prototype.Min = function () {
    let node = this.root
    let key
    while (node != null) {
      key = node.key
      node = node.left
    }
    return key
  }

  BinarySerachTree.prototype.Search = function (key) {
    return this.SearchNode(this.root, key)
  }
  BinarySerachTree.prototype.SearchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (node.key > key) {
      return this.SearchNode(node.left, key)
    }
    else if (node.key < key) {
      return this.SearchNode(node.right, key)
    }
    else {
      return true
    }
  }

  // 删除节点
  BinarySerachTree.prototype.Remove=function(key){
    // 记录父节点,方便后续操作
    let parent=null
    //记录此时遍历节点位置
    let curent=this.root
    // 判断左右子节点
    let IsLeft=true
    if (curent===null) {
      return false
    }
    // 循环遍历树节点，当满足条件时，找到删除接节点位置，以及他的父节点和是父节点左右子节点
    while(curent.key!=key){
      if (key<curent.key) {
        parent=curent
        IsLeft=true
        curent=curent.left
      }else{
        parent=curent
        IsLeft=false
        curent=curent.right
      }
      //当全部遍历完，没有找到节点返回false
      if (curent===null) { 
        return false
      }
    }

    // 2、根据不同条件删除响应的元素
    // 2.1、如果遍历的是叶节点
  }
}

let bst = new BinarySerachTree()
bst.Insert(11)
bst.Insert(7)
bst.Insert(15)
bst.Insert(5)
bst.Insert(3)
bst.Insert(9)
//先序遍历
let str = ''
bst.PreOrder((key) => {
  str += key + ','
})
console.log('先序遍历:' + str);
//中序遍历
str = ''
bst.MidOrder((key) => {
  str += key + ','
})
console.log('中序遍历:' + str);
// 后续遍历
str = ''
bst.PostOrder((key) => {
  str += key + ','
})
console.log('后续遍历' + str);

// 查询树最小值
let min = bst.Min()
console.log('最小值:' + min);

// 查询树最大值
let max = bst.Max()
console.log('最大值:' + max);

// 判断树中是否含有特定的元素
let IsElement = bst.Search(3)
console.log(IsElement);