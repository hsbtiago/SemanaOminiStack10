const { Router } = require('express');
const devController = require('../backend/controllers/devController');
const searchController = require('../backend/controllers/searchController');

const routes = Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);
routes.delete('/devs', devController.destroy);

routes.get('/search', searchController.index);


module.exports = routes;