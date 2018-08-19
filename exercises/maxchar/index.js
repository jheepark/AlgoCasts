// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let Obj = {};
  let max = 0;
  let maxChar = '';
  str.split('').forEach((letter) => {
    Obj[letter] ? Obj[letter]++ : Obj[letter] = 1;
    if (Obj[letter] > max) {
      max = Obj[letter];
      maxChar = letter;
    }
  })
  return maxChar
}

module.exports = maxChar;
