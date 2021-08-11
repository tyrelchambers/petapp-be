'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("SerialIDs", "petId", {
      type: Sequelize.UUID,
      references: {
        model: "Pets",
        key: "uuid"
      },
      onDelete: "CASCADE",
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("SerialIDs", "petId")
  }
};
