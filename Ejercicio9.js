//EJERCICIO 9
/**Verificación de número Armstrong. Programa iterativo
Un número de n dígitos es Armstrong si la suma de sus dígitos elevados a n da el mismo número
Ejemplo: 153 → 1³ + 5³ + 3³ = 153. */
let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero) || numero < 0) {
  alert("Ingrese un número válido.");
} else {
  let digitos = numero.toString().split("");
  let potencia = digitos.length;
  let suma = 0;

  for (let d of digitos) {
    suma += Math.pow(parseInt(d), potencia);
  }

  if (suma === numero) {
    alert(numero + " es un número Armstrong.");
  } else {
    alert(numero + " no es un número Armstrong.");
  }

  console.log("Número:", numero, "Suma de potencias:", suma);
}