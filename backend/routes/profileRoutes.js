const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/new', (req, res, next) => {
    db.Profile.create({
        name: req.body.name,
        UserId: req.body.UserId
    })
    .then(newProfile => res.send(newProfile))
    .catch();
});

router.get('/find/:id', (req, res, next) => {
    db.Profile.findAll({
        wher: { UserId: req.params.id },
        include: [db.User]
    })
    .then(profile => res.send(profile))
    .catch();
});

module.exports = router;