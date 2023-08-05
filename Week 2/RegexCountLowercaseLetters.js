function countLowercaseLetters(str) {
  const lowercaseLetters = str.match(/[a-z]/g);
  return lowercaseLetters ? lowercaseLetters.length : 0;
}

// Test cases
console.log(countLowercaseLetters("abc")); // Output: 3
console.log(countLowercaseLetters("abcABC123")); // Output: 3
console.log(countLowercaseLetters("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); // Output: 3
console.log(countLowercaseLetters("")); // Output: 0
console.log(countLowercaseLetters("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); // Output: 0
console.log(countLowercaseLetters("abcdefghijklmnopqrstuvwxyz")); // Output: 26
