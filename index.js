const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('hello world master')
})

app.get('/service', (req, res) => {
	res.status(200).send('service');
})

app.get('/about', (req, res) => {
	res.status(200).send('about-us');
})


app.get('/contact', (req, res) => {
	res.status(200).send('Contact us');
})

app.get('/about', (req, res) => {
	res.status(200).send('About Us');
})

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Started'));