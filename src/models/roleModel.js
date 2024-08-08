const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  schema: "opex",
  tableName: 'auth_role',
  timestamps: false,
});

module.exports = Role;
