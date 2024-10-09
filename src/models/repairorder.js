'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepairOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepairOrder.init({
    fecha: DataTypes.DATE,
    problema_reportado: DataTypes.STRING,
    id_dispositivo: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    costo_estimado: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'RepairOrder',
  });
  return RepairOrder;
};