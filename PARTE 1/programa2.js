const estudiantes = ['12345', '12369', '15489'];
const carreras = ['Ingeniería', 'Marketing Digital', 'Veterinaria', 'Medicina', 'Enfermería', 'Derecho'];

const actividades = {
    'Fútbol': { semestre: 1, cupos: 10 },
    'Baloncesto': { semestre: 2, cupos: 5 },
    'Volleyball': { semestre: 1, cupos: 8 },
};

function estaEnLista(elemento, lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true;
        }
    }
    return false;
}

function registrarEstudiante(codigo, carrera, actividad, semestre) {
    // Validar código de estudiante y carrera
    if (!estaEnLista(codigo, estudiantes)) {
        console.log('Código de estudiante no registrado.');
        return;
    }

    if (!estaEnLista(carrera, carreras)) {
        console.log('Carrera no válida.');
        return;
    }

    // Validar semestre
    if (semestre < 1 || semestre > 8) {
        console.log('Semestre no válido. Debe estar entre 1 y 8.');
        return;
    }

    if (!actividades[actividad]) {
        console.log('Actividad deportiva no válida.');
        return;
    }

    if (actividades[actividad].semestre !== semestre) {
        console.log('Actividad no disponible en el semestre seleccionado.');
        return;
    }

    if (actividades[actividad].cupos <= 0) {
        console.log('No hay cupos disponibles para la actividad seleccionada.');
        return;
    }

    actividades[actividad].cupos -= 1;
    console.log(`Estudiante ${codigo} registrado en ${actividad} para el semestre ${semestre}.`);
}

const codigoEstudiante = prompt('Ingrese el código de estudiante:');
const carreraEstudiante = prompt('Ingrese la carrera del estudiante (Ingeniería, Marketing Digital, Veterinaria, Medicina, Enfermería, Derecho):');
const actividadDeseada = prompt('Ingrese la actividad deportiva deseada (Fútbol, Baloncesto, Volleyball):');
const semestreEstudiante = parseInt(prompt('Ingrese el semestre (1-8):'), 10);

registrarEstudiante(codigoEstudiante, carreraEstudiante, actividadDeseada, semestreEstudiante);

