// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// SOLUTION 1
// function reverseInt(n) {
//   let reversed = '';

//   for (const char of String(n).split('')) {
//     if (char !== '-') reversed = char + reversed;
//   }
//   return Math.sign(n) * Number(reversed);
// }

// SOLUTION 2
function reverseInt(n) {
  const reversed = String(n).split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
