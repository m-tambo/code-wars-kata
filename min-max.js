// https://www.codewars.com/kata/559590633066759614000063/train/javascript

// Write a function that returns both the minimum and maximum number of the given list/array

function minMax(arr){
  const arr2 = arr.slice().sort((a, b) => a - b)
  let arr3 = [].push(arr2[0])//, arr2[arr2.length-1])
  return arr3
}


console.log(minMax([100, 44, 78, 101, 10, 7, 111, 99]) + ` should be [7, 111]`)
