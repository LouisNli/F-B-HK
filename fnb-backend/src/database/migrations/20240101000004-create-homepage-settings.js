'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('homepage_settings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      hero_image: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      hero_title: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      hero_subtitle: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      hero_button_text: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      philosophy_title: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      philosophy_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      photo_grid_1: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      photo_grid_2: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      photo_grid_3: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      photo_grid_4: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('homepage_settings');
  }
};
