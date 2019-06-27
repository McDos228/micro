module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define('Goods', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {timestamp:false});
  Goods.associate = function(models) {
    // associations can be defined here
  };
  return Goods;
};