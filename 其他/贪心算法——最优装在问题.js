function sortweight(w,ind,n){
    let i,j,temp;
    let temp1,temp2;
    for (i=0;i<n;i++)
    {
        ind[i]=i;

        for(i=0;i<n;i++)
        {
            temp=i;
            for (j=i+1;j<n;++j)
            {
                if(w[j]<w[temp])
                    temp=j;
            }
            if(temp!=i)
            {
                temp1=w[i];
                w[i]=w[temp];
                w[temp]=temp1;
                temp2=ind[i];
                ind[i]=ind[temp];
                ind[temp]=temp2;
                console.log(1);
            }
        }
    }

}
// let n=parseInt(prompt("商品数量"));
// let weight_max=parseInt(prompt('背包容纳重量'));
// let w=(prompt('依次输入商品质量').split(' ')).map(Number);
let n=3;
let w=[2,1,5];
let ind=[];
sortweight(w,ind,n)
console.log(w);
console.log(ind);