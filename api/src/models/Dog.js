const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    weight: {
      type: DataTypes.STRING,
      validate: { min: 0 },
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      validate: { min: 0 },
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      validate: { min: 1 },
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
