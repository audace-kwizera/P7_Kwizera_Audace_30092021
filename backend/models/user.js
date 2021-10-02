/** Création du modèle user */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    
    User.associate = models => {
        /** Permettre à l'utilisateur de créer plusieurs post */
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });

        /** Permettre à l'utilisateur d'avoir un profil */
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        })
    };

    return User;
};