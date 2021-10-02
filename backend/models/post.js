/** Création du modèle profile */
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    /** associer le post au à l'utilisateur qui 
     * a fait le post
     */
    Post.associate = models => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
};