// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ---------------- inbuilt reverse method ---------------------
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// ---------------- for loop ---------------------
// linear runtime, each additional character = 1 step through 1 loop.
// This would be 'N', or 'linear' runtime.

// function reverse(str) {
//   let reverseStr = ''
//   for(let i = str.length - 1; i >= 0; i--) {
//     reverseStr = reverseStr + str[i]
//   }
//   return reverseStr
// }

// ---------------- new syntax ---------------------
// function reverse(str) {
//   let reversed = '';
//
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// ---------------- reduce helper function ---------------------
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
