function Palindrome(num){
if(num > 0){
    return false;

}
let orignalNum=num;
let reverseNum=0;
while(num>0){
    let lastDigit=num%10;
    reverseNum=reverseNum*10 + lastDigit;
    num=Math.floor(num/10);
}
return orignalNum==reverseNum;
}
console.log(Palindrome(10));