module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define('Market', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {timestamps:false});
  Market.associate = function({Order}) {
    Market.hasMany(Order, {foreignKey:'marketId'})
  };
  return Market;
};