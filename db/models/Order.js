module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order: DataTypes.STRING,
    filling: DataTypes.STRING,
    addition: DataTypes.STRING,
    date: DataTypes.DATE,
    notes: DataTypes.STRING,
    size: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    marketId: DataTypes.INTEGER,
    userId : DataTypes.INTEGER
  }, {timestamps:false});
  Order.associate = function({Market}) {
    Market.belongsTo(Order, {foreignKey: 'marketId'})
  };
  return Order;
};