function filter_list(list) {
  return list.filter((item) => typeof item === "number");
}

console.log(filter_list([1, 2, "a", "b"])); // Output: [1, 2]
console.log(filter_list([1, "a", "b", 0, 15])); // Output: [1, 0, 15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // Output: [1, 2, 123]
