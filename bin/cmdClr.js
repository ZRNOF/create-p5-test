function cmdClr(text, color) {
	const hexToDec = (hex) => parseInt(hex, 16)
	const reset = "\x1b[0m"
	const r = hexToDec(color.slice(1, 3))
	const g = hexToDec(color.slice(3, 5))
	const b = hexToDec(color.slice(5, 7))
	const colorCode = `\x1b[38;2;${r};${g};${b}m`
	return `${colorCode}${text}${reset}`
}

module.exports = cmdClr
