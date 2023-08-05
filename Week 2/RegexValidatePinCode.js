function validatePIN(pin) {
  // Check if the input is a valid 4-digit or 6-digit number
  return /^\d{4}$|^\d{6}$/.test(pin);
}

// Test cases
console.log(validatePIN("1234")); // true
console.log(validatePIN("127545")); // true
console.log(validatePIN("a234")); // false
