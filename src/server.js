const express = require('express')

const convert = require("./convert")

const port = 8080;

const app = express()
app.use(express.json())

app.post('/rgbToHex', (req, res) => {
	const {red, blue, green} = req.body
	try{
		const hex = convert.RGBToHex(red, blue, green)
		const myJson = {hex}
		res.json(myJson)
	} catch (error) {
		console.log(error.message)
		const { message } = error
		res.status(400).json({error: message})
	}
})

app.post('/hextoRgb', (req, res) => {
	const {hex} = req.body
	try{
	const rgb = convert.HexToRGB(hex)
	res.json(rgb)
	}
	catch (error) {
		console.log(error.message)
		const { message} = error
		res.status(400).json({error: message})
	}
})


app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})