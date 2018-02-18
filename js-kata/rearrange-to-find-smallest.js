// https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript



const smallestNumber = (originalNumber) => {
	let newNumber, indexOfDigitMoved, newIndexOfDigit
	
	let array = originalNumber.toString().split('')
	let lowestDigit = array.slice().sort()[0]
	let indexOfLowest = array.indexOf(lowestDigit)
	let arrayMinusLowest = array.filter(x => array.indexOf(x) != indexOfLowest)
	
	if (lowestDigit != array[0]) { // if the lowest digit is not at the start of the number
		indexOfDigitMoved = indexOfLowest
		newIndexOfDigit = 0
		newNumber = Number([lowestDigit].concat(arrayMinusLowest).join(''))
	} else 
	if (lowestDigit == array[0]) { // if the number starts with the lowest digit

	}

  return [newNumber, indexOfDigitMoved, newIndexOfDigit]
}

// tests
console.log(smallestNumber(261235), ' should be [126235, 2, 0]');
console.log(smallestNumber(209917), ' should be [29917, 0, 1]');
console.log(smallestNumber(285365), ' should be [238565, 3, 1]');
console.log(smallestNumber(269045), ' should be [26945, 3, 0]');
console.log(smallestNumber(296837), ' should be [239687, 4, 1]');
