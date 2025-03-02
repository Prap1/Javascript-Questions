// S= n(n+1)/2
// If numbers are from 1 to n, use sum formula (n*(n+1))/2.


// function MissingNumber(arr,n){
// let totalSum=(n*(n+1))/2;
// let arraySum=arr.reduce((sum,num)=>sum+num,0);
// return totalSum-arraySum;

// }
// let arr=[10,20,40];
// let n=4;
// console.log(MissingNumber(arr,n));
//  If numbers have a custom range, use min/max sum formula.
function findAllMissingNumbers(arr, n) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missingNumbers = [];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

// Example usage
let arr = [10, 20, 30, 40]; // Missing numbers: 12, 13
let n = 6; // The total count should be 6

console.log(findAllMissingNumbers(arr, n)); // Output: [12, 13]
