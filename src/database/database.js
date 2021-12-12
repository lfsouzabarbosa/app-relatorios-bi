//estou dizendo que vou usar a biblioteca sequelize
const Sequelize = require ('sequelize');

const database = {
    host: '191.252.120.13',
    port: 3306,
    name: 'techandsoul',
    dialect: 'mysql',
    user: 'luizbarbosa',
    password: 'luizbarbosa'
}
//preciso passar para o sequelize os dados do banco de dados
const sequelize = new Sequelize (
    database.name,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect
    }
);

module.exports = sequelize;