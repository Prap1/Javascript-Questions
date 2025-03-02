function isAnagram(str1, str2) {
    let Count = {};

    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) return false;

    // Count frequency of characters in str1
    for (let char of str1) {
        Count[char] = (Count[char] || 0) + 1;
    }

    // Decrease frequency based on str2
    for (let char of str2) {
        if (!Count[char]) return false; // If char is missing, not an anagram
        Count[char]--;
    }

    return true;
}

// Test with "hello" and "world" (which are NOT anagrams)
let str1 = "listen", str2 = "silent";

if (isAnagram(str1, str2)) {
    console.log("Anagram");
} else {
    console.log("Not Anagram"); // Fixed the output message
}
