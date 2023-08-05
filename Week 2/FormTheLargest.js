function maxNumberFromDigits(number) {
  const digitsArray = number.toString().split("").map(Number);
  const sortedDigits = digitsArray.sort((a, b) => b - a);
  return parseInt(sortedDigits.join(""), 10);
}

// Test cases
console.log(maxNumberFromDigits(213)); // Output: 321
console.log(maxNumberFromDigits(8970)); // Output: 9870
console.log(maxNumberFromDigits(12345)); // Output: 54321
