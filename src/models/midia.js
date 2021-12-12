const Sequelize = require('sequelize');

//busco os dados de configuracao do bd
const sequelize = require('../database/database');

//o define cria a tabela no bd
//o nome da tabela é invoice
//defino os atributos
const Midia = sequelize.define("midia", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    cliente: {
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    tipo: {
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    valor: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    },
    dataInicio: {
        allowNull: false,
        type: Sequelize.DATEONLY()
    },
    dataFinal: {
        allowNull: false,
        type: Sequelize.DATEONLY()
    }
});

module.exports = Midia;