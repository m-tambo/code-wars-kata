// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// 6 floors looks like this
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

const towerBuilder = (nFloors) => {
	let towerArray = [];
	for (let i = 0; i < nFloors; i++) {
		let row = ' '.repeat(nFloors - i - 1)
				+ '*'.repeat(2 * i + 1)
				+ ' '.repeat(nFloors - i - 1);
		towerArray.push(row);
	}
	return towerArray;
}

// console.log(towerBuilder(6))