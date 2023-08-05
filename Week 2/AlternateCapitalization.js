function capitalize(str) {
  let evenResult = "";
  let oddResult = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      // Capitalize letters at even indexes
      evenResult += str[i].toUpperCase();
      oddResult += str[i];
    } else {
      // Capitalize letters at odd indexes
      evenResult += str[i];
      oddResult += str[i].toUpperCase();
    }
  }

  return [evenResult, oddResult];
}

// Test cases
console.log(capitalize("abcdef")); // Output: ['AbCdEf', 'aBcDeF']
console.log(capitalize("hello")); // Output: ['HeLlO', 'hElLo']
console.log(capitalize("javascript")); // Output: ['JaVaScRiPt', 'jAvAsCrIpT']
