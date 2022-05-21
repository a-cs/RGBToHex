function ValueToHex(value) {
	if (typeof(value) === "number"){
		const hex = value.toString(16)
		return (hex.length == 1 ? ("0" + hex) : hex)
	}
	else {
		throw Error("You must provide a number.")
	}
}

function RGBToHex (red, green, blue){
	if((red && green && blue) || (red === 0 && green === 0 && blue === 0)){
		
		if (typeof(red) === "number" && typeof(green) === "number" && typeof(blue) === "number"){
			return ("#" + ValueToHex(red)+ ValueToHex(green)+ ValueToHex(blue))
		}
		else {
			throw Error("You must provide three number arguments.")
		}
	}
	else {
		throw Error("You must provide three number arguments.")
	}
}

// console.log(RGBToHex(255, 100, 200));
// console.log(RGBToHex("red", "green"));
// console.log(RGBToHex("red", "green", "blue"));
// console.log(ValueToHex("255"));
// console.log(RGBToHex(00,00,00))


function HexToRGB (hex) {
	if(typeof(hex) === "string"){
		if(hex.length === 7){
			if(hex[0] === "#"){
				const red =  parseInt(hex[1] + hex[2],16)
				const green =  parseInt(hex[3] + hex[4],16)
				const blue =  parseInt(hex[5] + hex[6],16)
				const rgb = {red, green, blue}
				return (rgb)
			}
			else {
				throw Error("You must provide a string started with '#'.")
			}
		}
		else {
			throw Error("You must provide a string with 7 characters.")
		}
	}
	else {
		throw Error("You must provide a string with 7 characters.")
	}
}

// console.log(HexToRGB ("#ff64c8"));

module.exports = { ValueToHex, RGBToHex, HexToRGB}