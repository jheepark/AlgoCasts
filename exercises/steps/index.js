// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// --- REPEAT ---------------------
// function steps(n) {
//   for (let i = 1; i <= n; i++){
//     let word = '#';
//     word = word.repeat(i);
//     if (n-i > 0) {
//       let spaces = ' ';
//       spaces = spaces.repeat(n-i);
//       word += spaces;
//     }
//     console.log(word);
//   }
// }

// // --- NESTED LOOP ---------------------

// runtime complexity: n squared complexity (quadratic)

// function steps(n) {
//   for (let row = 0; row < n; row++){
//     let word = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         word += '#';
//       } else {
//         word += ' ';
//       }
//     }
//     console.log(word);
//   }
// }

// --- RECURSIVE SOLUTION ---------------------
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row+1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair)
}

module.exports = steps;
