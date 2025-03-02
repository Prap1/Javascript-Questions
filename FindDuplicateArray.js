function DuplicateArray(arr){
    let count ={};
    let dupliactes=[];

    for(let num of arr){
        count[num]=(count[num] || 0)+1;

    }
    for(let key in count){
        if(count[key]>1){
            dupliactes.push(Number(key))
        }
    }
    return dupliactes;
    }
    console.log(DuplicateArray([1, 2, 3, 4, 2, 5, 6, 1, 7,7]));
