function rotation(arr, k) {
    let n = arr.length;
    k = k % n; // To handle cases when k is larger than n
    reverse(arr, 0, n - k - 1); // Reverse the first n - k elements
    reverse(arr, n - k, n - 1); // Reverse the last k elements
    reverse(arr, 0, n - 1); // Reverse the whole array
    return arr; // Return the rotated array
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7], k = 4;
console.log(rotation(arr, k)); // This will now print the rotated array
