// function RemoveDuplicateArray(arr) {
//     let count = {};
//     let uniqueArr = []; // Array to store unique elements

//     for (let num of arr) {
//         if (!count[num]) { // If number is not already counted, add it
//             count[num] = 1;
//             uniqueArr.push(num);
//         }
//     }

//     return uniqueArr;
// }

// // Example usage:
// console.log(RemoveDuplicateArray([1, 2, 3, 4, 2, 5, 6, 1, 7, 7])); 
// // Output: [1, 2, 3, 4, 5, 6, 7]

function RemoveDuplicateArray(arr){
    let seen={};
    let uniqueArr=[];
    for(let num of arr){
        if(!seen[num]){
            seen[num]=true;
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}
console.log(RemoveDuplicateArray([1, 2, 3, 4, 2, 5, 6, 1, 7, 7]));