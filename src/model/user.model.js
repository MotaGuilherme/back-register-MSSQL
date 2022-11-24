const sequelize = require('sequelize');
const database = require('../../db');
const schema = "";

class User extends sequelize.Model{}

User.init({

    id:
        {
           type: sequelize.INTEGER,
           autoIncrement: true,
           allowNull: false,
           primaryKey: true
        },
    name:
        {
            type: sequelize.STRING,
            allowNull: true
        },
    email:
        {
            type: sequelize.STRING,
            allowNull: true
        },
    password:
        {
            type: sequelize.STRING,
            allowNull: true
        },
    cep:
        {
            type: sequelize.STRING,
            // allowNull: true
        },
    street:
        {
            type: sequelize.STRING,
            allowNull: true
        },
    district:
        {
            type: sequelize.STRING,
            allowNull: true
        },
    locality: {
        type: sequelize.STRING,
        allowNull: true

    },
    UF: {
        type: sequelize.STRING,
        allowNull: true

    }

},{
    sequelize: database, modelName: 'Usersss',schema,
}, {timestamps:false}
);

module.exports = User;


