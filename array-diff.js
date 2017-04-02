// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// implement a difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  const differ = []
  for (i = 0; i < a.length; i++) {
    if (b.includes(a[i]) === false) {
      differ.push(a[i])
    }
  }
  return differ
}

console.log(array_diff([2, "2", "2", '1', 0, '0'], ['2', 0]) + ` should return [2, '1', '0']`)

// clever way, using filter and indexOf
// function array_diff(a, b) {
//   return a.filter( (x) => b.indexOf(x) === -1)
// }
