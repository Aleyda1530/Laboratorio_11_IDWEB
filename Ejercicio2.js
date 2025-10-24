//EJERCICIO 2
/* Solicita edad y muestra:
“Niño” si < 12
“Adolescente” si entre 12 y 17
“Adulto” si entre 18 y 59
“Adulto mayor” si ≥ 60
*/
let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad) || edad < 0) {
  alert("Edad inválida. Intente nuevamente.");
} else if (edad < 12) {
  alert("Niño");
} else if (edad <= 17) {
  alert("Adolescente");
} else if (edad <= 59) {
  alert("Adulto");
} else {
  alert("Adulto mayor");
}

console.log("Edad ingresada:", edad);