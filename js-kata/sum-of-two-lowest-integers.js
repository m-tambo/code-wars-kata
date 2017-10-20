// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
// For example, when an array is passed like [19,5,42,2,77], the output should be 7


function twoSmallestSum(arr) {
  const sortedArray = arr.sort( (a,b) => a > b ? 1 : a < b ? -1 : 0)
  return sortedArray[0] + sortedArray[1]
};


console.log(twoSmallestSum([5, 100, 17, 82, 19, 11]) + ' should be 16')
