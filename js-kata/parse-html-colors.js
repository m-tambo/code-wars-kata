// http://www.codewars.com/kata/58b57ae2724e3c63df000006/train/javascript

// Your task is to implement a function which takes a color as a string and returns the parsed color as a map.
// The input string represents one of the following:

// 6-digit hexadecimal - "#RRGGBB"
// e.g. "#012345", "#789abc", "#FFA077"
// Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

// 3-digit hexadecimal - "#RGB"
// e.g. "#012", "#aaa", "#F5A"
// Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

// Preset color name
// e.g. "red", "BLUE", "LimeGreen"
// You have to use the predefined map PRESET_COLORS. The keys are the names of preset colors in lower-case
// and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

const cssColorNames = require('./css-color-names.json');
const hexToRgb = (string) => parseInt(string, 16);

const parseHTMLColor = (color) => {
	if (color[0] == '#') {
		const [r, g, b] = color.length == 4
			? [color[1] + color[1], color[2] + color[2], color[3] + color[3]]
			: [color.substring(1, 3), color.substring(3, 5), color.substring(5, 7)]
		return {
			r: hexToRgb(r),
			g: hexToRgb(g),
			b: hexToRgb(b)
		}
	} else {
		return parseHTMLColor(cssColorNames[color.toLowerCase()])
	}
}


// tests
// console.log(hexToRgb(59), ' should be 89')
// console.log(hexToRgb('af'), ' should be 175')
// console.log(cssColorNames['aqua'], " should be #00ffff")

console.log(parseHTMLColor('#80FFA0'), " should be { r: 128, g: 255, b: 160 })");
console.log(parseHTMLColor('#3B7'), " should be { r: 51, g: 187, b: 119 }");
console.log(parseHTMLColor('LimeGreen'), " should be { r: 50, g: 205, b: 50 })");
console.log(parseHTMLColor('#0000ff'), " should be { r: 0, g: 0, b: 255 })");