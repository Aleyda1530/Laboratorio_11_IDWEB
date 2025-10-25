//EJERCICIO 6
/**Números primos en rango. Pide un número y muestra todos los primos entre 1 y dicho número. Programa iterativo
 */

let limite = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(limite) || limite < 2) {
  alert("Ingrese un número válido mayor o igual a 2.");
} else {
  let primos = [];

  for (let num = 2; num <= limite; num++) {
    let esPrimo = true;

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      if (num % divisor === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      primos.push(num);
    }
  }

  alert("Números primos entre 1 y " + limite + ":\n" + primos.join(", "));
  console.log("Primos hasta " + limite + ":", primos);
}
