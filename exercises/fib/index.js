// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//-----------ITERATIVE SOLUTION--------------------
//-----------linear run time 1 for 1----------------------
// function fib(n) {
//   let fibArr = [];
//   for(let x = 0; x <= n; x++) {
//     if (x > 1) {
//       fibArr.push(fibArr[x-1] + fibArr[x-2]);
//     }
//     else {
//       fibArr.push(x);
//     }
//   }
//   return fibArr[n];
// }


//-----------RECURSIVE SOLUTION--------------------
//-----------exponential run time ----------------------
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//
//   return fib(n - 1) + fib(n -2);
// }

//-----------MEMOIZE SOLUTION--------------------

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n -2);
}

const fib = memoize(slowFib);

module.exports = fib;
