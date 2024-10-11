'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Repair.belongsTo(models.RepairOrder, {
        foreignKey: 'id_orden',
        as: 'ordenReparacion'
      });
     
    }
  }
  Repair.init({
    id_orden: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    costo_real: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Repair',
  });
  return Repair;
};