const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./roleModel');
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
  roleId: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'role',
  },
  
}, 
{
  freezeTableName: true,
  schema:"opex",
  tableName: 'auth_user',
  timestamps: false,
});

User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
module.exports = User;
