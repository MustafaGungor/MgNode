var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./controller/UserController');
var RoleController = require('./controller/RoleController');
var MenuController = require('./controller/MenuController');
app.use('/users', UserController);
app.use('/rols', RoleController);
app.use('/menus', MenuController);

module.exports = app;