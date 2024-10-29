'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepairOrder extends Model {
    
    static associate(models) {
      RepairOrder.belongsTo(models.User, {
        foreignKey: 'id_usuario',
        as: 'tecnico'
      });

      RepairOrder.belongsTo(models.Device, {
        foreignKey: 'id_dispositivo',
        as: 'dispositivo'
      });

      RepairOrder.hasMany(models.Repair, {
        foreignKey: 'id_orden',
        as: 'reparaciones'
      });
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