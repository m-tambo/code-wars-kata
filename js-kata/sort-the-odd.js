// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// sort ascending odd numbers but even numbers must be on their places.

function sortArray(array) {
  oddArray = array.slice().sort((a, b) => a - b).filter( (x) => x%2 === 1)
  return sortedArray = array.map( (x) => x%2 === 0 ? x : oddArray.shift() )
}


console.log(sortArray([5, 3, 2, 8, 1, 4]), ' should be [1, 3, 2, 8, 5, 4]')
