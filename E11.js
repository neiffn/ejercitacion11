let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Ejercicios de html.");
        break;
    case "martes":
        alert("Ejercicios de flex en css.");
        break;
    case "miércoles":
        alert("Ejercicios de grid en css.");
        break;
    case "jueves":
        alert("Ejercicios de bloques en css.");
        break;
    case "viernes":
        alert("Ejercicios de javascript.");
        break;
    case "sábado":
        alert("Ejercicios de variables en javascript.");
        break;
    case "domingo":
        alert("Ejercicios de consola en javascript.");
        break;
    default:
        alert("Escribe el día de la semana en minúsculas.");
}

for (i = 20; i <= 70; i++) {
    document.write("El número es: " + i + "<br>");
}

let cantidadHolaMundo = prompt("¿Cuántas veces muestro Hola Mundo?");

for (i = 0; i < cantidadHolaMundo; i++) {
    document.write(i + 1 + " Hola Mundo <br>");
}