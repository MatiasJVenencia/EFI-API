const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};

// Inicialización de los modelos
db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Repair = require('./repair')(sequelize, Sequelize.DataTypes);
db.RepairOrder = require('./repair-order')(sequelize, Sequelize.DataTypes);
db.Device = require('./device')(sequelize, Sequelize.DataTypes);

// Configuración de asociaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
