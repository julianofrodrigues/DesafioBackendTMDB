const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/connection')

const Favorite = sequelize.define('favorites', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});
module.exports = Favorite