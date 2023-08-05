function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false; // The walk must be exactly ten minutes.
  }

  let x = 0; // Horizontal position
  let y = 0; // Vertical position

  for (let direction of walk) {
    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
      default:
        return false; // Invalid direction encountered.
    }
  }

  // Check if the final position is back to the starting point (0, 0).
  return x === 0 && y === 0;
}

// Test cases
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // Output: true
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // Output: true
console.log(isValidWalk(["n", "n", "n", "s", "t", "s", "e", "e", "w", "w"])); // Output: false
