//importar la conexion con MySQl
const conexion = require("../config/database");

// funcion encargada a guardar los pedidos
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


    //preparar la consulta SQL para insertar el pedido
    const sql = `
        INSERT INTO pedidos
        (nombre, correo, producto, cantidad, tamano, llevar, observaciones)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    //ejecutar la consulta con los datos recibidos
    const [resultado] = await conexion.execute(sql, [
        nombre,
        correo,
        producto,
        cantidad,
        tamano,
        llevar ? 1 : 0,
        observaciones || ""
    ]);

    //devolver el resultado de la operacion
    return resultado;
};

//exportar la funcion para utilizarla en el controlador
module.exports = { guardarPedido };
