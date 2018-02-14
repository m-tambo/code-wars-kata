// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence
//and returns a list of items without any elements with the same value
// next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
  let inputArray = typeof iterable == 'string' ? Array.from(iterable) : iterable;
  let prunedArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != prunedArray[prunedArray.length - 1]) {
      prunedArray.push(inputArray[i])
    }
  }
  return prunedArray
}



// console.log(uniqueInOrder('AAAABBBCCDAABBB'), "should be ['A', 'B', 'C', 'D', 'A', 'B']")
// console.log(uniqueInOrder('ABBCcAD'), " should be ['A', 'B', 'C', 'c', 'A', 'D']")
// console.log(uniqueInOrder([1,2,2,3,3]), " should be [1,2,3]")


// ______clever solution using filter.call______
// const uniqueInOrder = (iterable) => {
//   return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// }
