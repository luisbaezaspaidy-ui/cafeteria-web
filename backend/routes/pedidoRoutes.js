
const express = require("express");
const router = express.Router();

const { registrarPedido } = require("../controllers/pedidosController");

// Ruta para registrar pedidos
router.post("/pedidos", registrarPedido);

module.exports = router;

