import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'Password123.', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
