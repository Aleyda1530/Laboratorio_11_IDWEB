//EJERCICIO 5
/* Cajero automático. El usuario ingresa un monto a retirar. El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se
entregan. (Debe ser la menor cantidad de billetes). Programa iterativo
*/

// Pedir el monto
let monto = parseInt(prompt("Ingrese el monto a retirar (múltiplo de 10):"));

// Validar el monto
if (isNaN(monto) || monto <= 0 || monto % 10 !== 0) {
  alert("Monto inválido. Debe ser positivo y múltiplo de 10.");
} else {
  // Denominaciones disponibles
  const billetes = [100, 50, 20, 10];
  const cantidadBilletes = {};

  let restante = monto;

  // Calcular la menor cantidad de billetes
  for (let valor of billetes) {
    cantidadBilletes[valor] = Math.floor(restante / valor);
    restante %= valor;
  }
  let resultado = `Monto a retirar: S/ ${monto}\n\nDesglose:\n`;
  for (let valor of billetes) {
    resultado += `Billetes de S/${valor}: ${cantidadBilletes[valor]}\n`;
  }
  alert(resultado);
  console.log(resultado);
}