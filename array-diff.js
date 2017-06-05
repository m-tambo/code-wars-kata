// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// implement a difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.

function differenceBetweenArrays(arrayA, arrayB) {
  const difference = []
  for (i = 0; i < arrayA.length; i++) {
    if (arrayB.includes(arrayA[i]) === false) {
      difference.push(arrayA[i])
    }
  }
  return difference
}

console.log(differenceBetweenArrays([2, "2", "2", '1', 0, '0'], ['2', 0]) + ` should return [2, '1', '0']`)

// clever way, using filter and indexOf
// function differenceBetweenArrays(arrayA, arrayB) {
//   return arrayA.filter( (x) => arrayB.indexOf(x) === -1)
// }
