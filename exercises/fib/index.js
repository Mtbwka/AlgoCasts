// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTION
function fib(n) {
  const series = [0, 1];
  while (series.length <= n) {
    series.push(series[series.length - 1] + series[series.length - 2]);
  }

  return series[n];
}

// RECURSIVE SOLUTION
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

module.exports = fib;
