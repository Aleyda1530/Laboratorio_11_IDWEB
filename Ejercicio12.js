// ERJERCICIO 12:
/*
Mismo ejercicio anterior, pero con un límite en su presupuesto. La app no deberá permitir que se pase del presupuesto y no
deberá considerar el último producto
 */

let presupuesto = parseFloat(prompt("Ingrese su presupuesto disponible:"));

if (isNaN(presupuesto) || presupuesto <= 0) {
  alert("Presupuesto inválido.");
} else {
  let total = 0;
  let contador = 0;

  while (true) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + (contador + 1) + ":"));
    
    if (isNaN(precio) || precio <= 0) {
      alert("Precio inválido, intente nuevamente.");
      continue;
    }

    if (total + precio > presupuesto) {
      alert("No puede agregar este producto. Supera su presupuesto.");
      break;
    }

    total += precio;
    contador++;

    let continuar = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
    if (continuar !== "s") break;
  }

  alert("Resumen de compra:\n" + "Productos comprados: " + contador + "\n" + "Total gastado: S/ " + total.toFixed(2) + "\n" +
    "Presupuesto restante: S/ " + (presupuesto - total).toFixed(2)
  );

  console.log("Presupuesto:", presupuesto, "Gastado:", total, "Restante:", presupuesto - total);
}