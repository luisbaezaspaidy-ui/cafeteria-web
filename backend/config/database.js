//importar MySQL y cargar las variables de entorno
const mysql = require("mysql2/promise");
require("dotenv").config();

//configurar la conexion con la base de datos
const conexion = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "cafeteria"
});

//exportar la conexion para utilizarla en otros archivos
module.exports = conexion;
