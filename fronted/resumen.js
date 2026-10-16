
document.addEventListener("DOMContentLoaded", function () {

    // Recuperar el último pedido registrado
    const datos = sessionStorage.getItem("ultimoPedido");

    if (!datos) {
        alert("No hay ningún pedido para mostrar.");
        window.location.href = "index.html";
        return;
    }

    const pedido = JSON.parse(datos);
    const contenedor = document.getElementById("datosPedido");

    // Función para crear cada fila del resumen
    function agregarDetalle(etiqueta, valor) {
        const fila = document.createElement("div");
        fila.className = "detalle";

        const titulo = document.createElement("strong");
        titulo.textContent = etiqueta;

        const contenido = document.createElement("span");
        contenido.textContent = String(valor);

        fila.appendChild(titulo);
        fila.appendChild(contenido);
        contenedor.appendChild(fila);
    }

    // Mostrar los datos
    agregarDetalle("Número de pedido:", pedido.id);
    agregarDetalle("Cliente:", pedido.nombre);
    agregarDetalle("Correo:", pedido.correo);
    agregarDetalle("Producto:", pedido.producto);
    agregarDetalle("Cantidad:", pedido.cantidad);
    agregarDetalle("Tamaño:", pedido.tamano);
    agregarDetalle("Para llevar:", pedido.llevar ? "Sí" : "No");
    agregarDetalle(
        "Observaciones:",
        pedido.observaciones || "Ninguna"
    );

    // Limpiar los datos temporales
    sessionStorage.removeItem("ultimoPedido");
});
