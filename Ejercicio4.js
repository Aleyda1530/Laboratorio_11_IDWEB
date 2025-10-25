//EJERCICIO 4
/* Tabla de multiplicar. El usuario ingresa un número y se muestra su tabla del 1 al 12. Programa iterativo*/
let num = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

let resultado = "Tabla del " + num + ":\n";

for (let i = 1; i <= 12; i++) {
  resultado += num + " x " + i + " = " + (num * i) + "\n";
}

alert(resultado);