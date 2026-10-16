
const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const producto = document.getElementById("producto").value;
    const cantidad = Number(document.getElementById("cantidad").value);

    const tamanoSeleccionado = document.querySelector(
        'input[name="tamano"]:checked'
    );

    const llevar = document.getElementById("llevar").checked;
    const observaciones = document.getElementById("Observaciones").value;

    // Validar los datos
    if (
        nombre === "" ||
        correo === "" ||
        producto === "" ||
        !Number.isInteger(cantidad) ||
        cantidad < 1 ||
        !tamanoSeleccionado
    ) {
        alert("Por favor, completa correctamente todos los campos.");
        return;
    }

    // Preparar el pedido
    const pedido = {
        nombre: nombre,
        correo: correo,
        producto: producto,
        cantidad: cantidad,
        tamano: tamanoSeleccionado.value,
        llevar: llevar,
        observaciones: observaciones
    };

    try {
        // Enviar el pedido al backend
        const respuesta = await fetch("/api/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {

            // Agregar el número generado por MySQL
            pedido.id = resultado.id;

            // Guardar los datos temporalmente
            sessionStorage.setItem(
                "ultimoPedido",
                JSON.stringify(pedido)
            );

            // Abrir la página de resumen
            window.location.href = "resumen.html";

        } else {
            alert(resultado.mensaje || "No se pudo guardar el pedido.");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Error de conexión con el servidor.");
    }
});
