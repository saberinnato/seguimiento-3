let continuar = true;

while (continuar) {
    // Solicitar la información al usuario
    let edad = parseInt(prompt("Ingrese su edad:"));
    let plan = prompt("Ingrese el tipo de plan deseado (mensual, trimestral o anual):");
    let cuotas = 1;

    if (edad < 18) {
        alert("No puede suscribirse al gimnasio si es menor de edad.");
        continue; // Salta al siguiente ciclo
    }

    let costoBase;

    switch (plan) {
        case 'mensual':
            costoBase = 150000;
            break;
        case 'trimestral':
            costoBase = 400000;
            break;
        case 'anual':
            costoBase = 1500000;
            break;
        default:
            costoBase = 0;
            alert("Tipo de plan inválido.");
            continue; // Salta al siguiente ciclo
    }

    if (plan === 'trimestral' || plan === 'anual') {
        cuotas = parseInt(prompt("Ingrese el número de cuotas:"));
    }

    let costoTotal = costoBase * cuotas;

    if (costoTotal > 0) {
        alert("Resumen de suscripción:\n" +
            "Tipo de plan: " + plan + "\n" +
            "Número de cuotas: " + cuotas + "\n" +
            "Costo total: " + costoTotal + " COP");
    }

    let opcion = prompt("Ingrese 's' para salir:");
    if (opcion === 's') {
        continuar = false;
    }
}
alert("Gracias por usar el simulador de suscripción al gimnasio.");
