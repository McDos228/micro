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
    bio: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {timestamps:false});
  Profile.associate = function({User}) {
    Profile.belongsTo(User, {foreignKey:'userId'})
  };
  return Profile;
};