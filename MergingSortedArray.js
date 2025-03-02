function mergeTwoSorted(arr1,arr2){
    let result =[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 9];

const mergedArray = mergeTwoSorted(arr1, arr2);
console.log(mergedArray); 