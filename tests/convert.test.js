const { assert, expect } = require("chai")
const convert = require("../src/convert")

describe("Tests for ValueToHex", () => {
	it("is value being converted to ff",() => {
		assert.equal(convert.ValueToHex(255), "ff")
		
	})
	it("is value being converted to 00",() => {
		assert.equal(convert.ValueToHex(00), "00")
		
	})
	it("is value being converted to 01",() => {
		assert.equal(convert.ValueToHex(1), "01")
		
	})
	it("should throw an error if value is not a number",() => {
		expect(() => {convert.ValueToHex("255")}).throw("You must provide a number.")
	})
	it("should throw an error if value is undefined",() => {
		expect(() => {convert.ValueToHex()}).throw("You must provide a number.")
	})
})

describe("Tests for RGBToHex", () => {
	it("is value being converted to #ffffff",() => {
		assert.equal(convert.RGBToHex(255,255,255), "#ffffff")
	})
	it("is value being converted to #000000",() => {
		assert.equal(convert.RGBToHex(0,0,0), "#000000")
	})
	it("is value being converted to #ff960a",() => {
		assert.equal(convert.RGBToHex(255, 150, 10), "#ff960a")
	})
	it("should throw an error if an object is undefined",() => {
		expect(() => {convert.RGBToHex(255, 150)}).throw("You must provide three number arguments.")
	})
	it("should throw an error if all objects are undefined",() => {
		expect(() => {convert.RGBToHex()}).throw("You must provide three number arguments.")
	})
	it("should throw an error if an object is not a number",() => {
		expect(() => {convert.RGBToHex("red",0,0)}).throw("You must provide three number arguments.")
	})
	it("should throw an error if all objects are not numbers",() => {
		expect(() => {convert.RGBToHex("red","green","0")}).throw("You must provide three number arguments.")
	})
	it("should throw an error if an number is greater than 255",() => {
		expect(() => {convert.RGBToHex(500,0,0)}).throw("The numbers should be between 0 and 255.")
	})
	it("should throw an error if an number is less than 0",() => {
		expect(() => {convert.RGBToHex(-1,0,0)}).throw("The numbers should be between 0 and 255.")
	})
})

describe("Tests for HexToRGB", () => {
	it("is value being converted from #ffffff",() => {
		const red = 255
		const green = 255
		const blue = 255
		const rgb = {red, green, blue}
		assert.deepEqual(convert.HexToRGB("#ffffff"), rgb)
	})
	it("is value being converted from #000000",() => {
		const red = 0
		const green = 0
		const blue = 0
		const rgb = {red, green, blue}
		assert.deepEqual(convert.HexToRGB("#000000"), rgb)
	})
	it("is value being converted from #ff960a",() => {
		const red = 255
		const green = 150
		const blue = 10
		const rgb = {red, green, blue}
		assert.deepEqual(convert.HexToRGB("#ff960a"), rgb)
	})
	it("should throw an error if value is not a string",() => {
		expect(() => {convert.HexToRGB(1234567)}).throw("You must provide a string with 7 characters.")
	})
	it("should throw an error if value has less than 7 characters",() => {
		expect(() => {convert.HexToRGB("123456")}).throw("You must provide a string with 7 characters.")
	})
	it("should throw an error if value has more than 7 characters",() => {
		expect(() => {convert.HexToRGB("12345678")}).throw("You must provide a string with 7 characters.")
	})
	it("should throw an error if value does not start with '#'",() => {
		expect(() => {convert.HexToRGB("1234567")}).throw("You must provide a string started with '#'.")
	})
})