/** Création du modèle profile */
module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    /** associer le profile au à l'utilisateur auquel
     * il appartient
     */
    Profile.associate = models => {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Profile;
};