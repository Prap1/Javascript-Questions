function secondLargest(arr){
    let first=-Infinity,second=-Infinity;
    for(let num of arr){
        if(num>first){
            second=first;
            first=num;

        }else if(num>second && num <first){
            second=num;
        }
    }
    return second==-Infinity?null:second;
}
console.log(secondLargest([10, 60, 5, 50, 40]));