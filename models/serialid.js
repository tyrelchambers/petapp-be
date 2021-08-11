'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SerialID extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SerialID.init({
    id: {
      type:DataTypes.STRING,
      primaryKey: true
    },
    petId: {
      type: DataTypes.UUID,
      references: {
        model: "Pets",
        key: "uuid"
      },
      onDelete: "CASCADE",
      unique: true
    }
  }, {
    sequelize,
    modelName: 'SerialID',
  });
  return SerialID;
};