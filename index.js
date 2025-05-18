// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./db");
const productoRoutes = require("./routes/productoRoutes");
const Producto = require("./models/Producto");

// Configuraciones
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("API de Productos");
});

// Rutas de productos
app.use("/api/productos", productoRoutes);

// Sincronización de Sequelize
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Base de datos sincronizada.");
});

// Exportar la aplicación para que Vercel la maneje
module.exports = app;
