const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('hello world')
})


app.get('/contact', (req, res) => {
	res.status(200).send('Contact us');
})

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Started'));