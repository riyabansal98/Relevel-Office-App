const { Router } = require('express');
const routes = Router();
const SearchController = require('./controllers/SearchController');

routes.get('/search', SearchController.index);

module.exports = routes;
