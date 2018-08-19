// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// -------------------------- using sort (n log n) ------------------------------

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
//
// function cleanString(str){
//   return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
// }

// --------------------------3 iterations O(n)------------------------------
function anagrams(stringA, stringB) {
  let stringAmap = map(stringA);
  let stringBmap = map(stringB);
  if (Object.keys(stringBmap).length !== Object.keys(stringAmap).length) {
    return false;
  }
  for (let char in stringAmap) {
    if (stringAmap[char] !== stringBmap[char]) {
      return false;
    }
  }
  return true;
}

function map(str){
  let charMap = {};
  str.replace(/[^\w]/g, "").toLowerCase().split("").forEach((letter)=> {
    charMap[letter] ? charMap[letter]++ : charMap[letter] = 1;
  });
  return charMap;
}


module.exports = anagrams;
