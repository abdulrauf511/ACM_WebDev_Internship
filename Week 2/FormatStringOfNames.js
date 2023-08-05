function formatNames(namesArray) {
  if (!Array.isArray(namesArray)) {
    return "Invalid input. Please provide an array of hashes.";
  }

  const names = namesArray.map((hash) => hash.name);

  if (names.length <= 1) {
    return names.join("");
  } else if (names.length === 2) {
    return names.join(" & ");
  } else {
    const lastTwoNames = names.slice(-2).join(" & ");
    const otherNames = names.slice(0, -2).join(", ");
    return `${otherNames}, ${lastTwoNames}`;
  }
}

const namesArray = [
  { name: "John" },
  { name: "Bobby" },
  { name: "Harry" },
  { name: "Don" },
];

console.log(formatNames(namesArray)); // Output: "John, Bobby, Harry & Don"
