// https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/train/javascript

// the problem of adding up all the whole numbers from 1 through a given number n.

const sumOfAllIntsLessThanNum = (num) => {
  return num <= 0 ? 'enter a positive number'
    : num%2 === 0 ? (num / 2)*(num + 1)
    : num%2 === 1 ? Math.ceil(num / 2)*num
    : false
};

console.log(`${sumOfAllIntsLessThanNum(100)} should be equal to 5050`)
console.log(`${sumOfAllIntsLessThanNum(9)} should be equal to 45`)
console.log(`${sumOfAllIntsLessThanNum(10)} should be equal to 55`)
console.log(`${sumOfAllIntsLessThanNum(11)} should be equal to 66`)
