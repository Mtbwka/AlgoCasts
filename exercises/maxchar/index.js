// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION 1
// function maxChar(str) {
//   const chars = {};
//   let max = 0;
//   let maxChar = '';

//   for (const char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }

//   for (const c in chars) {
//     if (chars[c] > max) {
//       max = chars[c];
//       maxChar = c;
//     }
//   }

//   return maxChar;
// }

// SOLUTION 2
function maxChar(str) {
  const chars = str
    .split('')
    .reduce((acc, c) => ({ ...acc, [c]: acc[c] + 1 || 1 }), {});

  const maxNumber = Math.max(...Object.values(chars));

  for (const c in chars) {
    if (chars[c] === maxNumber) {
      return c;
    }
  }
}

module.exports = maxChar;
