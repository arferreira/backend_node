const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
	'mongodb+srv://antonioricardo:rub32912289@omnistack-x3jb8.mongodb.net/antonioricardo?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

app.use(express.json());
app.use(routes);

app.listen(3333);
