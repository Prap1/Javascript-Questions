function largest(arr){
    let temp=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>temp){
            temp=arr[i];
        }
    }
    return temp;
}
let arr=[5, 5, 5, 5]
console.log(largest(arr));