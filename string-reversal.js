// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
// Given a string, reverse it omitting all non-alphabetic characters.

const reverseString = (string) => {
  let array = []
  for (let i = 0, len = string.length; i <= len; i++) {
    array.push(string.charAt(len - i))
  }
  return array.join('').replace(/[^a-z]/gi,'')
}

console.log(`${reverseString('E5s0p-i=l>ce')} should be eclipsE`)
