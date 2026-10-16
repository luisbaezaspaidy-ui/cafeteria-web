
const { guardarPedido } = require("../Models/pedidoModel");

// Registrar un nuevo pedido
const registrarPedido = async (req, res) => {
    try {
        const {
            nombre,
            correo,
            producto,
            cantidad,
            tamano,
            llevar,
            observaciones
        } = req.body;

        // Validar los datos recibidos
        if (
            typeof nombre !== "string" ||
            nombre.trim() === "" ||
            typeof correo !== "string" ||
            correo.trim() === "" ||
            typeof producto !== "string" ||
            producto.trim() === "" ||
            !Number.isInteger(cantidad) ||
            cantidad < 1 ||
            !["chica", "Mediana", "Grande"].includes(tamano) ||
            typeof llevar !== "boolean"
        ) {
            return res.status(400).json({
                mensaje: "Los datos del pedido no son válidos"
            });
        }

        // Guardar el pedido en MySQL
        const resultado = await guardarPedido({
            nombre,
            correo,
            producto,
            cantidad,
            tamano,
            llevar,
            observaciones
        });

        // Responder al formulario
        res.status(201).json({
            mensaje: "Pedido guardado correctamente",
            id: resultado.insertId
        });

    } catch (error) {
        console.error("Error al guardar el pedido:", error);

        res.status(500).json({
            mensaje: "Error al guardar el pedido"
        });
    }
};

module.exports = { registrarPedido };
