const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config() 
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_LOGIN,process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE
});

// Modelo de Agendamento
const Agendamento = sequelize.define('Agendamento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sincronizar o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
}).catch((error) => {
    console.error('Erro ao sincronizar com o banco de dados:', error);
});

module.exports = { Agendamento, sequelize };
