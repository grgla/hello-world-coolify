const express = require("express");
const app = express();

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Hello World from Docker + Coolify!");
});

// Puerto: usa variable de entorno PORT si existe, sino 3000
const PORT = process.env.PORT || 3000;

// Escuchar en 0.0.0.0 para que Docker/Coolify pueda exponerlo
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
