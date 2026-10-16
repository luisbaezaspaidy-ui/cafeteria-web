const express = require("express");
const path = require("path");
require("dotenv").config();
const pedidoRoutes = require("./routes/pedidoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended:
true}));
app.use(express.json());
app.use("/api", pedidoRoutes);

const fronted = path.join(__dirname,
"../fronted");

app.use(express.static(fronted));

app.get("/", (req, res) => {
res.sendFile(path.join(fronted,
"index.html"));
});

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en http://localhost:" + PORT);
});