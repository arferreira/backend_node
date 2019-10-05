const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/users', (req, res) => {
	return res.json(req.body);
});

module.exports = routes;
