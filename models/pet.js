'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pet.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4(),

    },
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    qrCode: DataTypes.TEXT,
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "uuid",
        
      },
      onDelete: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};