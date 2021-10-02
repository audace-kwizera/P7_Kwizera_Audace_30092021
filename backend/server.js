/** Création de l'application express */
const express = require('express');
const app = express(); 

/** Connexion de la base de données */
const db = require('./models');

/** Configuration du port du serveur pour la connexion */
const PORT = process.env.PORT || 3000;

/** Utilisation de l'application express */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Création et utilisation des routes */
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profiles', profileRoutes);

const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

/** Connexion de la database au serveur */
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at: http://localhost:${PORT}`);
    });
});
