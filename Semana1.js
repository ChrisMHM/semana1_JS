function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

function multiplicar(numero1, numero2) {
    if (typeof numero1 === "number1" && typeof numero2 === "number2") {
        console.log(numero1 * numero2);
    } else {
        console.log("Ambos parámetros deben ser números.");
    }
}

function esInvierno(mes) {
    let invierno = false;
    switch(mes) {
        case "junio":
            invierno = true;
            break;
        case "julio":
            invierno = true;
            break;
        case "agosto":
            invierno = true;
            break;
        default:
            invierno = false;
            break;
    }

    return invierno;
}

function esCovid(sintomasPaciente, sintomasCovid) {
    let counter = 0;

    for (let i = 0; i < sintomasCovid.length; i++) {
        for (let j = 0; j < sintomasPaciente.length; j++) {
            if (sintomasPaciente[j] === sintomasCovid[i]) {
                counter++;
            }            
        }
    }

    if (counter >= 2) {
        return true;
    }

    return false;
}

function horarioCursada(materia) {
    let horario = {dia: "", hora: ""};

    switch (materia) {
        case "MATEMÁTICA":
            horario.dia = "JUEVES";
            horario.hora = "19:00";
            break;
        case "LENGUA":
            horario.dia = "LUNES";
            horario.hora = "10:00";
            break;
        case "GEOGRAFÍA":
            horario.dia = "VIERNES";
            horario.hora = "15:30";
        default:
            horario.dia = "MATERIA NO ENCONTRADA";
            horario.hora = "99:99";
            break;
    }

    return horario;
}

console.log(horarioCursada("INGLÉS").dia);