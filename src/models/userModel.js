const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field:'username'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'surname',
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'gender',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'email',
  },

}, 
{
  freezeTableName: true,
  schema:"opex",
  tableName: 'auth_user',
  timestamps: false,
});

module.exports = User;
