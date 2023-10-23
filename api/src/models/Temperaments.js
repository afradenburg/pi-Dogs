const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {

  sequelize.define('temperaments', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

})
}
