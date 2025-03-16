function recursiveBubbleSort(arr, n) {
  if (n == 1) {
    return arr;
  }
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return recursiveBubbleSort(arr, n - 1);
}
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = recursiveBubbleSort(arr, arr.length);

console.log(sortedArr);
