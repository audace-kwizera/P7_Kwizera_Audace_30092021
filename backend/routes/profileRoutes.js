/** Installer le router express */
const express = require('express');
const router = express.Router();
/** Connecter la base de donné */
const db = require('../models');

/** Créer un nouveau profil */
router.post('/new', (req, res, next) => {
    db.Profile.create({
        name: req.body.name,
        UserId: req.body.UserId
    })
    .then(newProfile => res.send(newProfile))
    .catch();
});

/** Obtenir un profil */
router.get('/find/:id', (req, res, next) => {
    db.Profile.findAll({
        wher: { UserId: req.params.id },
        include: [db.User]
    })
    .then(profile => res.send(profile))
    .catch();
});

module.exports = router;