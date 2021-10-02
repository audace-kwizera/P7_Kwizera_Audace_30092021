/** Installer le router express */
const express = require('express');
const router = express.Router();
/** Connecter la base de donné */
const db = require('../models');

/** Créer un nouvel utilisateur */
router.post('/new', (req, res, next) => {
    db.User.create({
        username: req.body.username
    })
    .then(newUser => res.send(newUser))
    .catch();
});

/** Obtenir les utilisateur */
router.get('/all', (req, res, next) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
    })
    .then(allUsers => res.send(allUsers))
    .catch();
});

module.exports = router;