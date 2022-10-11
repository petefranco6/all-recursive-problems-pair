/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, output =[]) {
  if(arr.length === 0 ) return output;
  let first = arr[0];
  let rest = arr.slice(1);
  if(Array.isArray(first)) {
     return flatten(first.concat(rest), output)
  }
  output.push(first)
  return flatten(rest, output)
}

//console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
