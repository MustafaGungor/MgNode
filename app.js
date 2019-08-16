var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./controller/UserController');
var RoleController = require('./controller/RoleController');
app.use('/users', UserController);
app.use('/rols', RoleController);

module.exports = app;