'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.belongsTo(models.Area);
    }
  }
  Curso.init(
    {
      sigla: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [4, 4],
            msg: 'A sigla precisa conter exatamente 4 caracteres.',
          },
        },
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 40],
            msg: 'O nome precisa ter entre 5 e 40 caracteres.',
          },
        },
      },
      descricao: DataTypes.TEXT,
      areaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Curso',
    },
  );
  return Curso;
};
