// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n
// whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays(in C an array of Pair),
// each subarray having two elements, first the number whose squared divisors is a square
// and then the sum of the squared divisors.

const findTheDivisors = (number) => {
  if (number == 1) return [ 1 ]
  let arrayOfDivisors = []
  for (let i = 1; i < Math.ceil(Math.sqrt(number)); i++) {
    !(number % i) && arrayOfDivisors.push(i, number / i)
  }
  return arrayOfDivisors.sort((a, b) => a - b)
}

const sumOfSquaredDivisors = (number) => {
  return findTheDivisors(number)
    .map(x => x * x)
    .reduce((total, y) => total + y)
}

const isSquare = (n) => {
  return Math.sqrt(n) == Math.floor(Math.sqrt(n))
}

const isSumOfSquaredDivisorsSquare = (number) => {
  return isSquare(sumOfSquaredDivisors(number))
}

const produceAllPairsInRange = (m, n) => {
  let arrayOfPairs = []
  for (let i = m; i <= n; i++) {
    isSumOfSquaredDivisorsSquare(i) && arrayOfPairs.push([i, sumOfSquaredDivisors(i)])
  }
  return arrayOfPairs
}


// console.log(findTheDivisors(1), 'should be [ 1 ]')
// console.log(findTheDivisors(50), 'should be [ 1, 2, 5, 10, 25, 50 ]')
// console.log(findTheDivisors(42), 'should be [ 1, 2, 3, 6, 7, 14, 21, 42 ]')
// console.log(findTheDivisors(15), 'should be [ 1, 3, 5, 15 ]')

// console.log(sumOfSquaredDivisors(42), 'should be 2500')
// console.log(sumOfSquaredDivisors(287), 'should be 84100')

// console.log(isSquare(25), 'should be true')
// console.log(isSquare(81000000), 'should be true')
// console.log(isSquare(81000001), 'should be false')

// console.log(`${isSumOfSquaredDivisorsSquare(287)} should be true`)
// console.log(`${isSumOfSquaredDivisorsSquare(288)} should be false`)

// console.log(produceAllPairsInRange(1, 250), `should be [[1, 1], [42, 2500], [246, 84100]]`)
// console.log(produceAllPairsInRange(42, 250), 'should be [[42, 2500], [246, 84100]]')
// console.log(produceAllPairsInRange(250, 500), 'should be [[287, 84100]]')
