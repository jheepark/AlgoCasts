// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ---------------- String comparison ---------------------

// function palindrome(str) {
  // const reverse = str.split('').reverse.join('');
  // return str === reversed;
// }

// ---------------- Nested Loop ---------------------
// function palindrome(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length-1; j >= 0; j--) {
//       if( (i <= j) && (str[i] === str[j])) {
//           return true;
//       }
//       return false;
//     }
//   }
// }

// ---------------- While loop comparison ---------------------
// function palindrome(str) {
//   let lo = 0;
//   let hi = str.length - 1;
//
//   while(lo <= hi) {
//     if(str[lo] !== str[hi]){
//       return false;
//     };
//     lo++;
//     hi--;
//   }
//   return true;
// }

// ---------------- For Loop comparison ---------------------
function palindrome(str) {
  let hi = str.length -1;
  for (let lo = 0; lo < str.length; lo++) {
    if( (lo <= hi) && (str[lo] !== str[hi])) {
        return false;
    }
    hi--;
  }
  return true;
}

// // ---------------- EVERY method comparison ---------------------
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length -i -1];
//   })
// }

module.exports = palindrome;
