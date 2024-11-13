import { Sequelize } from "sequelize";

//2 valores- nombre de la DB y el nombre de usuario, password y las config
const db = new Sequelize("agenciaviajes", "Angel", "ANGELixcayau00_", {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

export default db;
