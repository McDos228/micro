module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: Sequelize.STRING,
      filling: Sequelize.STRING,
      addition: Sequelize.STRING,
      date: Sequelize.DATE,
      notes: Sequelize.STRING,
      size: Sequelize.INTEGER,
      quantity: Sequelize.INTEGER,
      marketId: Sequelize.INTEGER,
      userId : Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};