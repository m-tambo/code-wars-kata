// https://www.codewars.com/kata/maximum-subarray-sum

// find the maximum sum of a contiguous subsequence in an array or list of integers

const sumOfArray = (arr) => arr.reduce((a,b) => a + b)

const maxSequence = (arr) => {
  let maxSum = 0
  // try all possible subarray lengths, starting with 1
  for (let i = 1; i <= arr.length; i++) {
    // for each subarray length, try each possible starting index
    for (let j = 0; j <= arr.length - i; j++) {
      // if one of the subarrays is larger than the current highest, replace it
      let subArray = arr.slice(j, j + i)
      if (sumOfArray(subArray) > maxSum) maxSum = sumOfArray(subArray)
    }
  }
  return maxSum
}


// test
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 'should be 6')

// test
// console.log(sumOfArray([1,2,3,4,5,-1,-2,-3,-4,-5]), 'should be 0')
