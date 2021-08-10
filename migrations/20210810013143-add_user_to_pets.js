'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Pets", "userId", {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "uuid"
      },
      onDelete: "CASCADE",

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pets", "userId")
  }
};
