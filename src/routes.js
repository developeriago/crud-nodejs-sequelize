const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressControler');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/userList', UserController.index);
routes.post('/userCreate', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete); 

module.exports = routes;