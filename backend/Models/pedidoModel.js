
const conexion = require("../config/database");

// Guardar un pedido en MySQL
const guardarPedido = async (pedido) => {

    const {
        nombre,
        correo,
        producto,
        cantidad,
        tamano,
        llevar,
        observaciones
    } = pedido;

    const sql = `
        INSERT INTO pedidos
        (nombre, correo, producto, cantidad, tamano, llevar, observaciones)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [resultado] = await conexion.execute(sql, [
        nombre,
        correo,
        producto,
        cantidad,
        tamano,
        llevar ? 1 : 0,
        observaciones || ""
    ]);

    return resultado;
};

module.exports = { guardarPedido };
