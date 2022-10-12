/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// const subsets = (arr) => {
//   let newArr = [[]]
//   if (arr.length === 0) {
//     return newArr;
//   }
//   let n = arr[arr.length - 1]
//   let last = subsets(arr.slice(0, arr.length - 1));
//   return last.map(el => el.concat(n)).concat(last);
// }

const subsets = ([first, ...xs], ys = []) =>
  first === undefined ? [ys] : [...subsets(xs, ys), ...subsets(xs, [...ys, first])];

console.log(subsets([1,2]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
