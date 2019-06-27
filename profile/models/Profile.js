module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    birthday : DataTypes.DATE,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {timestamps:false});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};