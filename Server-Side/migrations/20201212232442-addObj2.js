module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    Promise.all([
      await queryInterface.addColumn(
        "Tests",
        "addSecondObj",
        {
          type: Sequelize.JSON
        }
      ),
      await queryInterface.addColumn(
        "Tests",
        "addArrayWithObj",
        {
          type: Sequelize.ARRAY(Sequelize.JSON)
        }
      ),
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};