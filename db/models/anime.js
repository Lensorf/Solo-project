'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Anime.init({
    imageUrl: DataTypes.TEXT,
    title: DataTypes.TEXT,
    animeUrl: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    userId: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};
