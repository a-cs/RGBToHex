const { expect } = require("chai")
const request = require("request");
const { app } = require("../src/server")

const url = "http://localhost:8080"

describe('Tests for RGBToHex route', () => {
	it("returns status 200 and a valid conversion with #ffffff", (done) => {
		const body = {
			"red": 255,
			"green": 255,
			"blue": 255
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal({ "hex": "#ffffff" });
			done();
		});
	});
	it("returns status 200 and a valid conversion with #000000", (done) => {
		const body = {
			"red": 0,
			"green": 0,
			"blue": 0
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal({ "hex": "#000000" });
			done();
		});
	});
	it("returns status 200 and a valid conversion with #ff960a", (done) => {
		const body = {
			"red": 255,
			"green": 150,
			"blue": 10
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal({ "hex": "#ff960a" });
			done();
		});
	});
	it("should return a status 400, and an error message if an object is undefined ", (done) => {
		const body = {
			"red": 255,
			"green": 255
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide three number arguments." });
			done();
		});
	});
	it("should return a status 400, and an error message if all objects are undefined ", (done) => {
		const body = {}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide three number arguments." });
			done();
		});
	});
	it("should return a status 400, and an error message if an object is not a number", (done) => {
		const body = {
			"red": 255,
			"green": 255,
			"blue": "blue"
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide three number arguments." });
			done();
		});
	});
	it("should return a status 400, and an error message if all objects are not numbers", (done) => {
		const body = {
			"red": "red",
			"green": "green",
			"blue": "blue"
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide three number arguments." });
			done();
		});
	});
	it("should return a status 400, and an error message if an number is greater than 255", (done) => {
		const body = {
			"red": 500,
			"green": 0,
			"blue": 0
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "The numbers should be between 0 and 255." });
			done();
		});
	});
	it("should return a status 400, and an error message if an number is less than 0", (done) => {
		const body = {
			"red": -1,
			"green": 0,
			"blue": 0
		}
		request.post({ url: `${url}/rgbToHex`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "The numbers should be between 0 and 255." });
			done();
		});
	});
});

describe('Tests for HexToRGB route', () => {
	it("returns status 200 and a valid conversion from #ffffff", (done) => {
		const body = {
			"hex": "#ffffff"
		}
		const newBody = {
			"red": 255,
			"green": 255,
			"blue": 255
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal(newBody);
			done();
		});
	});
	it("returns status 200 and a valid conversion from #000000", (done) => {
		const body = {
			"hex": "#000000"
		}
		const newBody = {
			"red": 0,
			"green": 0,
			"blue": 0
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal(newBody);
			done();
		});
	});
	it("returns status 200 and a valid conversion from #ff960a", (done) => {
		const body = {
			"hex": "#ff960a"
		}
		const newBody = {
			"red": 255,
			"green": 150,
			"blue": 10
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.deep.equal(newBody);
			done();
		});
	});
	it("should return a status 400, and an error message if value is not a string", (done) => {
		const body = {
			"hex": 1234567
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide a string with 7 characters." });
			done();
		});
	});
	it("should return a status 400, and an error message if has less than 7 characters", (done) => {
		const body = {
			"hex": "123456"
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide a string with 7 characters." });
			done();
		});
	});
	it("should return a status 400, and an error message if has more than 7 characters", (done) => {
		const body = {
			"hex": "12345678"
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide a string with 7 characters." });
			done();
		});
	});
	it("should return a status 400, and an error message if does not start with '#'", (done) => {
		const body = {
			"hex": "1234567"
		}
		request.post({ url: `${url}/hextoRgb`, json: body }, function (error, response, body) {
			expect(response.statusCode).to.equal(400);
			expect(body).to.deep.equal({ "error": "You must provide a string started with '#'." });
			done();
		});
	});
});