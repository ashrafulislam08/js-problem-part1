// 12 inch = 1 feet;
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// 75
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch.";
  return result;
}

const siamHeight = inchToFeet(75);
console.log(siamHeight);
const siamHeight2 = inchToFeet2(75);
console.log(siamHeight2);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
function kilometerToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
