function solicitarInformacion() {
    var fecha = prompt("Ingrese la fecha de la reserva (en formato DD-MM-YYYY):");
    var horaInicio = parseInt(prompt("Ingrese la hora de inicio de la reserva (en formato 24 horas):"), 10);
    var duracion = parseInt(prompt("Ingrese la duración de la reserva en horas:"), 10);
    var nombre = prompt("Ingrese el nombre del usuario o grupo que realiza la reserva:");
    return { fecha: fecha, horaInicio: horaInicio, duracion: duracion, nombre: nombre };
}

// Función para validar la hora de la reserva
function esHoraValida(horaInicio, duracion) {
    if (horaInicio < 8 || horaInicio >= 18) {
        return false;
    }
    if (horaInicio + duracion > 18) {
        return false;
    }
    return true;
}

// Función principal del programa
function reservaSalon() {
    var continuar = true;

    while (continuar) {
        var info = solicitarInformacion();
        var fecha = info.fecha;
        var horaInicio = info.horaInicio;
        var duracion = info.duracion;
        var nombre = info.nombre;

        if (esHoraValida(horaInicio, duracion)) {
            alert("Reserva confirmada para el salón 305.\n" +
                "Fecha: " + fecha + "\n" +
                "Hora de inicio: " + horaInicio + "\n" +
                "Duración: " + duracion + " horas\n" +
                "Nombre del usuario o grupo: " + nombre);
        } else {
            alert("No es posible realizar la reserva. La hora de inicio debe estar entre las 8:00 y las 18:00 y la duración no debe sobrepasar el horario de laboratorio.");
        }

        var opcion = prompt("¿Desea realizar otra reserva? (si/no):");
        if (opcion.toLowerCase() !== "si") {
            continuar = false;
        }
    }

    alert("Gracias por utilizar el sistema de reservas.");
}
reservaSalon();
