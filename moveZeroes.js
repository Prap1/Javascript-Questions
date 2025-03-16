function moveZeroes(arr){
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            let temp=arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
            index++;
        }

    }
    return arr;
}
let arr=[0,1,0,3,12];
console.log(moveZeroes(arr));

// timecompalexity : O(n)
//space complexity :O(1)