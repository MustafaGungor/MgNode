var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var fs = require("fs");

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));



app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        // res.setHeader("Content-Type", "application/json");
        res.end( data );
    });
})

app.get('/listUsers/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

app.post('/addUser', function (req, res) {
    var fileName = __dirname + "/" + "users.json";
    var file = require(fileName);
    fs.readFile( fileName, 'utf8', function (err, data) {
        data = JSON.parse( data );
        var length = data.length;
        data.push(req.body);
        res.setHeader("Content-Type", "application/json");
        fs.writeFileSync( fileName, JSON.stringify(data,null,2));
        res.end( JSON.stringify(data));
    });
})

app.delete('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( fileName, 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})