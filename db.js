// db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      require: process.env.DB_SSL === "true",
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conexión a la base de datos Aiven establecida.");
  })
  .catch((error) => {
    console.error("❌ Error al conectar con la base de datos:", error);
  });

module.exports = sequelize;
