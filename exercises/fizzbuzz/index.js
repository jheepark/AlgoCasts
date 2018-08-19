// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 15 === 0) {
      console.log('fizzbuzz');
    }
    else if(x % 3 === 0) {
      console.log('fizz');
    }
    else if(x % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(x);
    }
  }
}

// ----------------fizzBuzzBang version with string concatination -----------------
// function fizzBuzzBang(n) {
//   for(let x = 1; x <= n; x++) {
//     let str = '';
//     if (x % 3 === 0){
//       str = 'fizz';
//     }
//     if (x % 5 === 0){
//       str = str + 'buzz';
//     }
//     if (x % 7 === 0){
//       str = str + 'bang'
//     }
//     if (str.length) {
//       console.log(str)
//     }
//     else {
//       console.log(x)
//     }
//   }
// }

module.exports = fizzBuzz;
