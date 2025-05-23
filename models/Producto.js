// models/Producto.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
});

module.exports = Producto;
