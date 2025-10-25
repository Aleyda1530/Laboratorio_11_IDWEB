// EJERCICIO 8
/**
 * Crea un menú con opciones:
Calcular área del círculo
Calcular área del rectángulo
Salir
El programa debe repetir hasta que el usuario elija salir.
 */

let opcion;

do {
  opcion = prompt(
    "Menú de áreas:\n" +
    "1. Calcular área de un círculo\n" +
    "2. Calcular área de un rectángulo\n" +
    "3. Salir\n\n" +
    "Ingrese una opción (1-3):"
  );

  switch (opcion) {
    case "1":
      let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      if (isNaN(radio) || radio <= 0) {
        alert("Radio inválido.");
      } else {
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        alert("Área del círculo: " + areaCirculo.toFixed(2));
      }
      break;

    case "2":
      let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Datos inválidos.");
      } else {
        let areaRectangulo = base * altura;
        alert("Área del rectángulo: " + areaRectangulo.toFixed(2));
      }
      break;

    case "3":
      alert("Programa finalizado.");
      break;

    default:
      alert("Opción no válida.");
  }

} while (opcion !== "3");