module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("user", {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Tutorial;
};
