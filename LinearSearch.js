function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
let arr=[20,5,40,80];
const target =40;
console.log(linearSearch(arr,target));
