/** Installer le router express */
const express = require('express');
const router = express.Router();
/** Connecter la base de donné */
const db = require('../models');

/** Créer un nouveau post */
router.post('/new', (req, res, next) => {
    db.Post.create({
        text: req.body.text,
        UserId: req.body.UserId
    })
    .then(newPost => res.send(newPost))
    .catch();
});

/** Obtenir un post */
router.get('/find/:id', (req, res, next) => {
    db.Post.findAll({
        wher: { UserId: req.params.id },
        include: [db.User]
    })
    .then(post => res.send(post))
    .catch();
});

module.exports = router;


module.exports = router;