'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    static associate(models) {
      // define association here
    }
  }
  Partida.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pontuacao: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Partida',
    },
  );
  return Partida;
};
