const express = require('express');
const app = express();

const login = require('./routes/auth');
const people = require('./routes/people');

// static assets
app.use(express.static('./methods-public'));
// parse from data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/people', people);
app.use('/login', login);

// app.post('/login', (req, res) => {
// 	const { name } = req.body;
// 	if (name) return res.status(200).send(`Welcome ${name}`);

// 	res.status(401).send('Please provide Credentials');
// });

app.listen(3000, () => {
	console.log('listening');
});
