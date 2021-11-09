const route = require('express').Router();
const auth_middleware = require('../middlewares/auth.middleware');
const user_controller = require('../controllers/user.controller');

route.get('/users', auth_middleware.verifyToken, user_controller.GetUsers);

module.exports = route;
