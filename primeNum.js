function isPrime(num) {
    if (num < 2) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Not a prime number");
            return; // Exit early if a divisor is found
        }
    }

    console.log("Prime number");
}

// Test cases
isPrime(4);  // Not a prime number
// isPrime(2);  // Prime number
// isPrime(3);  // Prime number
// isPrime(4);  // Not a prime number
// isPrime(5);  // Prime number
// isPrime(10); // Not a prime number
