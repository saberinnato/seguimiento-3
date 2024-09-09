function comprarTiquete() {
    // Solicitar la información al usuario
    var origen = prompt("Ingrese el origen del viaje:");
    var destino = prompt("Ingrese el destino del viaje:");
    var fecha = prompt("Ingrese la fecha del viaje (DD-MM-YYYY):");
    var hora = prompt("Ingrese la hora del viaje (HH:MM):");
    var tipoTiquete = prompt("Ingrese el tipo de tiquete (ida o ida y vuelta):");
    var nombre = prompt("Ingrese su nombre:");
    var identificacion = prompt("Ingrese su identificación:");
    var correo = prompt("Ingrese su correo electrónico:");

    // Validar que la información no esté vacía
    if (origen === "" || destino === "" || fecha === "" || hora === "" || tipoTiquete === "" || nombre === "" || identificacion === "" || correo === "") {
    alert("Por favor, complete todos los campos.");
    return;
    }

    // Calcular el costo del tiquete
    var costo = 0;
    if (tipoTiquete === "ida") {
      costo = 50000; // Costo fijo por un viaje de ida
    } else if (tipoTiquete === "ida y vuelta") {
      costo = 90000; // Costo fijo por ida y vuelta
    } else {
    alert("Tipo de tiquete no válido.");
    return;
    }

    // Mostrar resumen del viaje
    alert("Resumen del viaje:\n" +
        "Origen: " + origen + "\n" +
        "Destino: " + destino + "\n" +
        "Fecha: " + fecha + "\n" +
        "Hora: " + hora + "\n" +
        "Tipo de tiquete: " + tipoTiquete + "\n" +
        "Nombre del pasajero: " + nombre + "\n" +
        "Identificación: " + identificacion + "\n" +
        "Correo: " + correo + "\n" +
        "Costo del tiquete: " + costo + " COP");

    // Confirmar la compra
    var confirmacion = prompt("¿Desea confirmar la compra? (sí/no):");

    if (confirmacion === "si") {
    alert("Transacción exitosa.");
    } else {
    alert("Compra cancelada.");
    }
}

comprarTiquete();
