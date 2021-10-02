const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/new', (req, res, next) => {
    db.User.create({
        username: req.body.username
    })
    .then(newUser => res.send(newUser))
    .catch();
});

router.get('/all', (req, res, next) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
    })
    .then(allUsers => res.send(allUsers))
    .catch();
});

module.exports = router;