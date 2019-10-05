const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');
const SpotController = require('./controllers/SpotController');
const BokkingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Rotas
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BokkingController.store);

module.exports = routes;
