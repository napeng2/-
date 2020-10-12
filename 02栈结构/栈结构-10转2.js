let a=13
let arr=[]
for(let i=0;a>0&&i<10;i++)
{
  arr[i]=a%2
  a=Math.floor(a/2)
}
let newArr=[]
console.log(arr);
for(let i=0;i<arr.length;i++)
{
  // newArr[i]=arr.pop()
  console.log(arr.pop());
}

console.log(newArr);