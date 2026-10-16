//importar las librerias y las rutas necesarias
const express = require("express");
const path = require("path");
require("dotenv").config();
const pedidoRoutes = require("./routes/pedidoRoutes");

//crear el servidor y establecer el puerto
const app = express();
const PORT = process.env.PORT || 3000;

//configurar el servidor para recibir informacion
app.use(express.urlencoded({ extended:
true}));
app.use(express.json());

//registrar las rutas de los pedidos
app.use("/api", pedidoRoutes);

//permitir el acceso a los archvos fronted
const fronted = path.join(__dirname,
"../fronted");

app.use(express.static(fronted));

//mostrar la pagina principal de la cafeteria
app.get("/", (req, res) => {
res.sendFile(path.join(fronted,
"index.html"));
});

//iniciar el servidor
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en http://localhost:" + PORT);
});