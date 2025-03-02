function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Define 'n' before using it
let n = 4; // Change this to any number to print more Fibonacci terms

// Print Fibonacci series up to 'n'
for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
}
