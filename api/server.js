// api/server.js
const app = require("../index");

// Verificar que Vercel usa Serverless
if (process.env.NODE_ENV === "production") {
  console.log("🚀 API ejecutándose en Vercel (Serverless)");
}

module.exports = app;

