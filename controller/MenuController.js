var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Menu = require('../model/Menu');

// CREATES A NEW ROLE
router.post('/', function (req, res) {
    Menu.create({
            name : req.body.name,
            title: req.body.title,
            path: req.body.path,
            order: req.body.order,
            icon: req.body.icon,
            topMenuId: req.body.topMenuId
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE ROLES IN THE DATABASE
router.get('/', function (req, res) {
    Menu.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE ROLE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Menu.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A ROLE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Menu.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE ROLE IN THE DATABASE
router.put('/:id', function (req, res) {
    Menu.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;