function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left + right)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }

    }
}
arr=[10,20,30,40,50];
target=40;
console.log(binarySearch(arr,target));