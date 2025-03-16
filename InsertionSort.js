function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let key = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
        
    }
}
let arr = [10, 7, 0.6, 40, 5];
let n = arr.length;
insertionSort(arr, n);
console.log(arr);