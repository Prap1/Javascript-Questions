function union(a,b){
    let n1=a.length;
    let n2=b.length;
    let i=0;
    let j=0;
    let unionArr=[];
    while(i<n1 && j<n2){
        if(a[i]<b[i]){
            if(unionArr[unionArr.length-1]!=a[i]){
                unionArr.push(a[i]);
            }
            i++;
        }
        else if(a[i]>b[i]){
            if(unionArr[unionArr.length-1]!=b[j]){
                unionArr.push(b[j]);
            }
            j++;
        }
        else{
            if(unionArr[unionArr.length-1]!=a[i]){
                unionArr.push(a[i]);
            }
            i++;
            j++;
        }
        
    }
    while(i<n1){
        if(unionArr[unionArr.length-1]!=a[i]){
            unionArr.push(a[i]);
        }
        i++;
    }
    while(j<n2){
        if(unionArr[unionArr.length-1]!=b[j]){
            unionArr.push(b[j]);
        }
        j++;
    }
    return unionArr;
}
const a = [1, 2, 4, 5, 6];
const b = [2, 3, 5, 7,9,10,11];

console.log(union(a, b));