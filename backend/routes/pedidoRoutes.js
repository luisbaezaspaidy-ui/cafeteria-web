//importar express y el controlador de pedidos
const express = require("express");
const router = express.Router();

const { registrarPedido } = require("../controllers/pedidosController");

// Ruta para registrar pedidos
router.post("/pedidos", registrarPedido);

//exportar las rutas del sistema
module.exports = router;

