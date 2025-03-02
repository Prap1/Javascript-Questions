var num = 153;

function Armstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}

if (Armstrong(num)) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}
