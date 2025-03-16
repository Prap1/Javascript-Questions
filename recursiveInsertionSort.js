function insertionSort(arr,n,i){
    if(i==n)return;
    let j=i;
    while(j>0 && arr[j-1]>arr[j]){
        let temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
        j--;
    }
    insertionSort(arr, n, i+1);
}
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;
insertionSort(arr,n,0);
console.log(arr);