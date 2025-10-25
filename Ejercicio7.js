//EJERCICIO 7
/**Suma todos los números desde 1 hasta N, pero omite los múltiplos de 5. Programa iterativo */
let limite = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(limite) || limite <= 0) {
  alert("Ingrese un número válido mayor que 0.");
} else {
  let suma = 0;

  for (let i = 1; i <= limite; i++) {
    if (i % 5 !== 0) {
      suma += i;
    }
  }

  alert("La suma de 1 a " + limite + " (sin múltiplos de 5) es: " + suma);
  console.log("Resultado:", suma);
}
