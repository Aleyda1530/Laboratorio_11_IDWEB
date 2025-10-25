//EJERCICIO 3
/* Contador de números pares e impares. Pide 10 números y muestra cuántos fueron pares y cuántos impares*/

let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad) || edad < 0) {
  alert("Edad inválida. Intente nuevamente.");
} 
else if (edad < 12) {
  alert("Niño");
} 
else if (edad <= 17) {
  alert("Adolescente");
} 
else if (edad <= 59) {
  alert("Adulto");
} 
else {
  alert("Adulto mayor");
}
console.log("Edad ingresada:", edad);