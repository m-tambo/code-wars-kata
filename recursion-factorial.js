// http://www.codewars.com/kata/recursion-number-1-factorial/train/javascript

// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// Your task is to to create the function factorial that receives n and returns n!. You must use recursion.

const recursion = (n) => {
  return n === 1 ? 1 : (n * recursion(n-1))
}

console.log(recursion(1), `should equal 1`)
console.log(recursion(5), `should equal 120`)
