// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1
// function anagrams(stringA, stringB) {
//   const mapA = createMap(stringA);
//   const mapB = createMap(stringB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }

//   for (const element in mapA) {
//     if (mapA[element] !== mapB[element]) {
//       return false;
//     }
//   }

//   return true;
// }

// function createMap(str) {
//   const charMap = {};

//   for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// SOLUTION 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
