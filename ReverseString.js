function reverseString(str) {
    let result = '';
    let word = '';
    
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {  // Check if the current character is not a space
            word += str[i];  // Build the current word
        } else if (word) {  // If we encounter a space and there's a word
            result = word + ' ' + result;  // Add the word to the result in reverse order
            word = '';  // Reset word for the next word
        }
    }

    // Add the last word (if there's one left)
    if (word) {
        result = word + ' ' + result;
    }

    // Remove trailing space and return the result
    return result.trim();
}

console.log(reverseString("chala jata hoon kisi ki dund m"));  // Output: "World Hello"
