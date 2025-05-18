// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Productos");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const productoRoutes = require("./routes/productoRoutes");
app.use("/api/productos", productoRoutes);

const sequelize = require("./db");
const Producto = require("./models/Producto");

// Sincronización de Sequelize
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Base de datos sincronizada.");
});