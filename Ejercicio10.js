//EJERCICIO 10
/**Menú con múltiples opciones. Crea un menú tipo consola con las siguientes opciones:
Calcular estadísticas de N notas
Promedio
Valor máximo
Valor mínimo
Cantidad de pares e impares
Cuántos están por encima del promedio
Contar números pares e impares en un rango
Generar una tabla de multiplicar
Salir
Debe repetirse hasta que el usuario elija la opción “Salir”. */

let opcion;

do {
  opcion = prompt(
    "MENÚ PRINCIPAL\n" +
    "1. Estadísticas de N notas\n" +
    "2. Contar pares en un rango\n" +
    "3. Mostrar tabla de multiplicar\n" +
    "4. Salir\n\n" +
    "Elija una opción (1-4):"
  );

  switch (opcion) {
    case "1":
      let cantidad = parseInt(prompt("¿Cuántas notas ingresará?"));
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida.");
        break;
      }

      let notas = [];
      for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
        if (isNaN(nota)) {
          alert("Nota inválida. Se registrará como 0.");
          nota = 0;
        }
        notas.push(nota);
      }

      let suma = 0;
      let max = notas[0];
      let min = notas[0];
      let pares = 0;

      for (let n of notas) {
        suma += n;
        if (n > max) max = n;
        if (n < min) min = n;
        if (n % 2 === 0) pares++;
      }

      let promedio = suma / cantidad;
      let mayoresProm = notas.filter(n => n > promedio).length;

      alert(
        "Resultados:\n" +
        "Promedio: " + promedio.toFixed(2) + "\n" +
        "Máximo: " + max + "\n" +
        "Mínimo: " + min + "\n" +
        "Notas pares: " + pares + "\n" +
        "Por encima del promedio: " + mayoresProm
      );
      break;

    case "2":
      let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
      let fin = parseInt(prompt("Ingrese el final del rango:"));
      if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
        alert("Rango inválido.");
      } else {
        let contadorPares = 0;
        for (let i = inicio; i <= fin; i++) {
          if (i % 2 === 0) contadorPares++;
        }
        alert("Cantidad de pares entre " + inicio + " y " + fin + ": " + contadorPares);
      }
      break;
    case "3":
      let numero = parseInt(prompt("Ingrese un número para la tabla:"));
      if (isNaN(numero)) {
        alert("Número inválido.");
      } else {
        let tabla = "";
        for (let i = 1; i <= 12; i++) {
          tabla += numero + " x " + i + " = " + (numero * i) + "\n";
        }
        alert("Tabla del " + numero + ":\n\n" + tabla);
      }
      break;
    case "4":
      alert("Programa finalizado.");
      break;
    default:
      alert("Opción no válida.");
  }
} while (opcion !== "4");