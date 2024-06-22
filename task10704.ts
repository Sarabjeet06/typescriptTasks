type Arr=[number,string, boolean];

const reverseTupple =(arr: Arr)=>{
    let n=arr.length;
    for(let i=0;i<n/2;i++){
        let temp=arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;
    }
    console.log(arr);
}

const arr:Arr=[42,"num",false];

reverseTupple(arr);

export {};