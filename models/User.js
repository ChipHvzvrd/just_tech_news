const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}


User.init(
    {
        //Table column definitions go here
    },
    {
        //Table config goes here

        sequelize,

        timestamps:false,

        freezeTableName: true,

        underscored: true,

        modelName: 'user'
    }
);

module.exports = User;

//Group 5