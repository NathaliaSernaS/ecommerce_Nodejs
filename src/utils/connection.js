// conexion con Sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' } );
// con la nueva versiion de sequelize se debe incluir el dialect, puede ser mysql, nosql, postgres,etc..

module.exports = sequelize;
