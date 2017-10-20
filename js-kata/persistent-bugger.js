// https://www.codewars.com/kata/persistent-bugger/train/javascript

const arrayify = (numb) => `${numb}`.split("").map(Number)
function persistence(num) {
  let perst = 0
  let numArray = arrayify(num)
  while (numArray.length > 1) {
    perst++
    let newNum = numArray.reduce((a,b) => a*b)
    numArray = arrayify(newNum)
  }
  return perst
}

console.log(persistence(number))
