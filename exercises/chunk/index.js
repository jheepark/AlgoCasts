// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunky = [];
  let x = 0;
  while (x < array.length) {
    chunky.push(array.slice(x, x+=size))
  }
  return chunky;
}

// function chunk(array, size) {
//   const chunky = [];
//   for (let element of array) {
//     const last = chunky[chunky.length-1];
//
//     if (!last || last.length === size) {
//       chunky.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunky;
// }

module.exports = chunk;
