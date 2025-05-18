// controllers/productoController.js
const Producto = require("../models/Producto");

const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

module.exports = {
  crearProducto,
  obtenerProductos,
};
