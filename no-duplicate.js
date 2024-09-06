const biryaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
  const unique = [];
  for (const element of array) {
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
