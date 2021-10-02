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

module.exports = router;