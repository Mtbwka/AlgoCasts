// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// SOLUTION 1
// function pyramid(n) {
//   const width = n * 2 - 1;
//   const center = Math.floor(width / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < width; col++) {
//       if (center - row <= col && center + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// SOLUTION 2
function pyramid(n, row = 0, col = 0, level = '') {
  if (n === row) {
    return;
  }
  const width = n * 2 - 1;

  if (width === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const center = Math.floor(width / 2);

  const add = center - row <= col && center + row >= col ? '#' : ' ';

  return pyramid(n, row, col + 1, level + add);
}

module.exports = pyramid;
