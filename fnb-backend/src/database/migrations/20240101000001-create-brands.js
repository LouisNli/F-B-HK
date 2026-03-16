'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      slug: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      chinese_name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      tagline: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      hero_image: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      concept_paragraph_1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      concept_paragraph_2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      concept_paragraph_3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      card_image: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      card_description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      opening_hours: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('brands');
  }
};
