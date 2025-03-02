function countVowel(str){
let count =0;
for(let i=0;i<str.length;i++){
    if('aeiou'.includes(str[i])){
        count++;
    }
}
return count;
}
const inputString = "H";
console.log(countVowel(inputString)); 