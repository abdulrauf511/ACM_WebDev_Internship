function isToday(date) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const givenYear = date.getFullYear();
  const givenMonth = date.getMonth();
  const givenDay = date.getDate();

  return (
    currentYear === givenYear &&
    currentMonth === givenMonth &&
    currentDay === givenDay
  );
}

// Example usage:
const date1 = new Date(); // Current date
const date2 = new Date("08-2023-05"); // Some other date

console.log(isToday(date1)); // Output: true
console.log(isToday(date2)); // Output: false
