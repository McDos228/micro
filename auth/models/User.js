module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    login: DataTypes.STRING,
    password : DataTypes.STRING,
    email: DataTypes.STRING
  }, {timestamps:false});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};