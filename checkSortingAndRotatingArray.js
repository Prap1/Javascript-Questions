// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2]

function checkSorting(arr) {
  let n = arr.length;
  if (n == 0 || n == 1) {
    return true;
  }
  let count = 0;
  let allEqual = true;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
    }
    if (arr[i] != arr[i + 1]) {
      allEqual = false;
    }
  }
  if (arr[n - 1] > arr[0]) {
    count++;
  }
  if (arr[n - 1] != arr[0]) {
    allEqual = false;
  }
  if (allEqual) {
    return true;
  }
  return count == 1;
}
let arr = [2, 1, 3, 4];
console.log(checkSorting(arr)); // true
