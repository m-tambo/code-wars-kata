// https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/train/javascript

// the problem of adding up all the whole numbers from 1 through a given number n.

function f(n){
  return n <= 0 ? false : n%2 === 0 ? (n / 2)*(n + 1) : n%2 === -1 ? Math.ceil(n / 2)*n : false
};

console.log(f(100) + ' should be equal to 5050')
console.log(f(9) + ' should be equal to 45')
console.log(f(10) + ' should be equal to 55')
console.log(f(11) + ' should be equal to 66')
