// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// create a function that takes a list of non-negative integers and strings
// and returns a new list with the strings filtered out.

function filter_list(list) {
  let filtered = []
  for (i=0; i<list.length; i++) {
    if (typeof list[i] === 'number') {
      filtered.push(list[i])
    }
  }
  return filtered
}

console.log(filter_list([1, 2, 3, '1', '23', '456', 0, '0', 4]) + 'should be [1, 2, 3, 0, 4]')


// another coder's solution using the .filter method
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }
