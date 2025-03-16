function SelectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < n; j++) {  // Start from i+1 to avoid rechecking the already sorted part
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    // Swap the found minimum element with the element at index i
    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }
}

// Test the SelectionSort function
let arr = [10, 7, 20.6, 40, 5];
let n = arr.length;
SelectionSort(arr, n);

// Print the sorted array
console.log(arr);
